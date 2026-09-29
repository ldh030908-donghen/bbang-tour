import { isoDate, hhmm, daysBetween } from "./date";
import { TRIP_DAYS, TRIP_META, type TripDay } from "./trip";

export type TripPhase =
  | { kind: "before"; dDay: number }
  | { kind: "during"; day: TripDay; currentItemId?: string }
  | { kind: "after" };

/** 기기의 현재 시각을 기준으로 여행 전/중/후와, 여행 중이면 오늘 날짜·지금 항목을 계산한다. */
export function getTripPhase(now: Date): TripPhase {
  const today = isoDate(now);

  if (today < TRIP_META.start) {
    return { kind: "before", dDay: daysBetween(today, TRIP_META.start) };
  }
  if (today > TRIP_META.end) {
    return { kind: "after" };
  }

  const day = TRIP_DAYS.find((d) => d.date === today) ?? TRIP_DAYS[TRIP_DAYS.length - 1];
  const nowHHMM = hhmm(now);

  let currentItemId: string | undefined;
  for (const item of day.items) {
    if (item.start <= nowHHMM) currentItemId = item.id;
    else break;
  }

  return { kind: "during", day, currentItemId };
}
