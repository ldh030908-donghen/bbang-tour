import type { PlaceStop } from "./trip";

/** 좌표가 있으면 좌표로, 없으면 텍스트 검색으로 구글맵 길찾기(대중교통)를 연다. */
export function dirUrl(stop: PlaceStop | { address: string }): string {
  if ("lat" in stop && stop.lat != null && stop.lng != null) {
    return `https://www.google.com/maps/dir/?api=1&destination=${stop.lat},${stop.lng}&travelmode=driving`;
  }
  const query = "address" in stop ? stop.address : `${stop.ko} ${stop.local ?? ""}`.trim();
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}&travelmode=driving`;
}

/** 장소 검색(핀 보기)만 필요할 때 */
export function searchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
