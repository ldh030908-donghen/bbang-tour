"use client";

import { useEffect, useState } from "react";
import { OCTOBER_CLIMATE } from "@/lib/climate";
import { fetchLiveWeatherForDate, type LiveWeather } from "@/lib/weatherApi";
import { isoDate } from "@/lib/date";

function clothingFor(highC: number): string {
  if (highC >= 22) return "가벼운 긴팔 + 얇은 겉옷. 낮엔 반팔도 괜찮음, 저녁엔 걸칠 옷 하나";
  if (highC >= 15) return "가벼운 자켓 + 얇은 니트";
  return "코트 + 니트, 아침저녁 목도리";
}

export default function WeatherCard({ date }: { date?: string }) {
  const [live, setLive] = useState<LiveWeather | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const targetDate = date ?? isoDate(new Date());
    let cancelled = false;
    fetchLiveWeatherForDate(OCTOBER_CLIMATE.city, targetDate).then((w) => {
      if (!cancelled) {
        setLive(w);
        setChecked(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [date]);

  const high = live?.high ?? OCTOBER_CLIMATE.highC;
  const low = live?.low ?? OCTOBER_CLIMATE.lowC;

  return (
    <div className="weather-card">
      <div className="weather-single">
        <div>
          <div className="weather-city">{OCTOBER_CLIMATE.city}</div>
          <div className="weather-note">{live ? live.sky : OCTOBER_CLIMATE.rainNote}</div>
        </div>
        <div className="weather-temps">
          <span className="weather-high">{high}°</span>
          <span className="weather-low">{low}°</span>
        </div>
      </div>
      <p className="weather-clothing">{clothingFor(high)}</p>
      <p className="weather-disclaimer">
        {live ? "실시간 예보" : checked ? "예보 범위 밖 — 10월 평년 기온 참고치" : "불러오는 중…"}
      </p>
    </div>
  );
}
