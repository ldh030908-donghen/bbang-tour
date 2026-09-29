// Open-Meteo — 무료, API 키 불필요. 예보 범위(약 15일 이내)에 들어와야 실데이터가 온다.
// 그 전에는 climate.ts의 평년값으로 대체된다.

export const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  대전: { lat: 36.3504, lng: 127.3845 },
};

export interface LiveWeather {
  high: number;
  low: number;
  sky: string;
}

const SKY_LABEL: Record<number, string> = {
  0: "맑음",
  1: "대체로 맑음",
  2: "구름 조금",
  3: "흐림",
  45: "안개",
  48: "안개",
  51: "이슬비",
  53: "이슬비",
  55: "이슬비",
  61: "비",
  63: "비",
  65: "많은 비",
  71: "눈",
  73: "눈",
  75: "많은 눈",
  80: "소나기",
  81: "소나기",
  82: "강한 소나기",
  95: "뇌우",
  96: "뇌우",
  99: "뇌우",
};

export function skyLabel(code: number): string {
  return SKY_LABEL[code] ?? "-";
}

/** dateISO(YYYY-MM-DD)의 예보. 범위 밖이거나 실패하면 null. */
export async function fetchLiveWeatherForDate(city: string, dateISO: string): Promise<LiveWeather | null> {
  const coords = CITY_COORDS[city];
  if (!coords) return null;
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&start_date=${dateISO}&end_date=${dateISO}`,
    );
    const data = await res.json();
    if (data?.error) return null;
    const high = data?.daily?.temperature_2m_max?.[0];
    const low = data?.daily?.temperature_2m_min?.[0];
    const code = data?.daily?.weathercode?.[0];
    if (typeof high !== "number" || typeof low !== "number") return null;
    return { high: Math.round(high), low: Math.round(low), sky: skyLabel(code) };
  } catch {
    return null;
  }
}
