"use client";

import { useEffect, useRef } from "react";
import type { Map as MapLibreMap, LngLatBoundsLike } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapPoint } from "@/lib/mapPoints";

// OpenFreeMap — 무료, API 키 불필요, 사용량 제한 없음 (openfreemap.org).
const STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

export default function TripMap({
  points,
  compact = false,
  orderMap,
}: {
  points: MapPoint[];
  compact?: boolean;
  /** 장소 이름 -> 방문 순번. 있으면 핀에 번호를 매긴다(하루 단위 지도용). */
  orderMap?: Record<string, number>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);

  useEffect(() => {
    let cancelled = false;
    const markerCleanups: Array<() => void> = [];

    (async () => {
      const { Map, Marker, Popup, NavigationControl } = await import("maplibre-gl");
      if (cancelled || !containerRef.current) return;

      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }

      const map = new Map({
        container: containerRef.current,
        style: STYLE_URL,
        center: [127.4225, 36.3255],
        zoom: 12,
        attributionControl: { compact: true },
        scrollZoom: false,
        cooperativeGestures: false,
      });
      mapRef.current = map;
      map.addControl(new NavigationControl({ showCompass: false }), "top-left");

      const bounds: [number, number][] = [];

      for (const p of points) {
        const el = document.createElement("span");
        const order = orderMap?.[p.ko];
        if (order != null) {
          el.className = `map-pin-num cat-${p.category}`;
          el.textContent = String(order);
        } else {
          el.className = `map-pin cat-${p.category}`;
        }
        const marker = new Marker({ element: el })
          .setLngLat([p.lng, p.lat])
          .setPopup(
            new Popup({ offset: 10, maxWidth: "220px" }).setHTML(
              `<strong>${p.ko}</strong>${p.local ? `<br/><span class="map-popup-local">${p.local}</span>` : ""}${p.desc ? `<p class="map-popup-desc">${p.desc}</p>` : ""}`,
            ),
          )
          .addTo(map);
        markerCleanups.push(() => marker.remove());
        bounds.push([p.lng, p.lat]);
      }

      if (bounds.length === 1) {
        map.setCenter(bounds[0]);
        map.setZoom(14);
      } else if (bounds.length > 1) {
        const lngs = bounds.map((b) => b[0]);
        const lats = bounds.map((b) => b[1]);
        const sw: [number, number] = [Math.min(...lngs), Math.min(...lats)];
        const ne: [number, number] = [Math.max(...lngs), Math.max(...lats)];
        map.fitBounds([sw, ne] as LngLatBoundsLike, { padding: 36, animate: false });
      }
    })();

    return () => {
      cancelled = true;
      markerCleanups.forEach((fn) => fn());
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [points, orderMap]);

  return <div ref={containerRef} className={`trip-map${compact ? " compact" : ""}`} />;
}
