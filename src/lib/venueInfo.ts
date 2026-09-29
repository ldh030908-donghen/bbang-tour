// 빵집·매장 웨이팅 난이도 참고표.
// 주의: 오픈시간과 대기 방식은 매장 사정에 따라 자주 바뀐다. 여기 적힌 값은 사용자가 전달한
// 정보를 정리한 참고용이며, 방문 직전 캐치테이블·매장 SNS로 다시 확인하는 걸 권장한다.

export type BookingNeed = "required" | "recommended" | "unnecessary";

export const BOOKING_LABEL: Record<BookingNeed, string> = {
  required: "웨이팅 필수급",
  recommended: "일찍 가면 좋음",
  unnecessary: "여유있음",
};

export interface VenueInfo {
  /** 앵커 링크용 고유 id (홈 화면 우선순위 → 가이드 탭 카드로 바로 스크롤) */
  id: string;
  name: string;
  dayId: string;
  closedOn: string;
  hoursNote: string;
  booking: BookingNeed;
  bookingNote?: string;
}

export const VENUE_INFO: VenueInfo[] = [
  {
    id: "mongsim",
    name: "몽심 대흥점",
    dayId: "day1",
    closedOn: "매장 공지 확인",
    hoursNote: "현장 웨이팅 9시 오픈, 캐치테이블 9시 30분 오픈",
    booking: "required",
    bookingNote: "마들렌(레몬·피칸·밀키)·클래식 휘낭시에는 오전에 품절될 수 있음",
  },
  {
    id: "jeongdong",
    name: "쁘띠정동문화사 (유성점)",
    dayId: "day1",
    closedOn: "매장 공지 확인",
    hoursNote: "번호표 뽑는 방식 — 본점은 정오 전 도착 필수",
    booking: "required",
    bookingNote: "이 지점 규칙이 본점과 같은지 방문 전 확인 추천. 휘낭시에·에그타르트",
  },
  {
    id: "coldbutter",
    name: "콜드버터베이크샵 (시청점)",
    dayId: "day1",
    closedOn: "매장 공지 확인",
    hoursNote: "본점은 현장 웨이팅 11시 30분, 캐치테이블 12시 오픈",
    booking: "recommended",
    bookingNote: "이 지점 대기 방식은 본점과 다를 수 있음. 고구마빵·우유소금빵",
  },
  {
    id: "sungsimdang",
    name: "성심당 (롯데백화점 대전점)",
    dayId: "day2",
    closedOn: "백화점 휴점일 확인",
    hoursNote: "웨이팅 난이도 매우 높음",
    booking: "required",
    bookingNote: "알밤롤·명란바게트(소금빵)·생귤시루·작은메아리·티그레·김치찹쌀주먹밥(정시 판매)",
  },
];
