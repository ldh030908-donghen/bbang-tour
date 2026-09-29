const WEEKDAY_KO = ["일", "월", "화", "수", "목", "금", "토"];

export function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}

export function isoDate(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

export function hhmm(d: Date): string {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

export function weekdayKo(dateStr: string): string {
  return WEEKDAY_KO[new Date(`${dateStr}T00:00:00`).getDay()];
}

export function formatDateKo(dateStr: string): string {
  const [, m, d] = dateStr.split("-");
  return `${Number(m)}월 ${Number(d)}일`;
}

/** 좁은 공간용 짧은 표기, 예: "11/7" */
export function formatDateShort(dateStr: string): string {
  const [, m, d] = dateStr.split("-");
  return `${Number(m)}/${Number(d)}`;
}

export function daysBetween(fromIso: string, toIso: string): number {
  const from = new Date(`${fromIso}T00:00:00`).getTime();
  const to = new Date(`${toIso}T00:00:00`).getTime();
  return Math.round((to - from) / 86400000);
}
