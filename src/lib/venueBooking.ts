// 방문지별 "예매완료" 체크 상태. 가이드 탭에서 체크하면 홈 화면 우선순위에도 반영된다.
// 폰별 localStorage 저장 — 공용 서버 없음.

export const VENUE_BOOKING_KEY = "bbang-tour-venue-booked";

export function loadVenueBooking(): Record<string, boolean> {
  try {
    const raw = window.localStorage.getItem(VENUE_BOOKING_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveVenueBooking(state: Record<string, boolean>): void {
  try {
    window.localStorage.setItem(VENUE_BOOKING_KEY, JSON.stringify(state));
  } catch {
    // 저장 실패해도 화면 사용에는 지장 없음
  }
}
