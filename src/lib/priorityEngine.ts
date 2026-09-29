// 홈 화면 "지금 해야 할 일" — 날짜와 예매 체크 상태에 따라 매번 다시 계산한다.
// 1) 아직 확인 안 된 웨이팅 필수급 매장 (가이드 탭 체크박스와 연동)
// 2) 여행일이 며칠 앞으로 다가왔을 때 보여주는 일반 준비물(보냉백·캐치테이블 앱 등)

import { TRIP_META } from "./trip";
import { VENUE_INFO } from "./venueInfo";
import { isoDate, daysBetween } from "./date";

export interface PriorityItem {
  id: string;
  title: string;
  reason: string;
  href?: string;
}

const GENERIC_PREP: PriorityItem[] = [
  {
    id: "gen-catchtable",
    title: "캐치테이블 앱 설치 + 로그인",
    reason: "몽심·콜드버터 시청점 등 현장 대기 잡을 때 바로 필요",
    href: "/checklist?group=waiting",
  },
  {
    id: "gen-coolbag",
    title: "보냉백 + 아이스팩 챙기기",
    reason: "하루 종일 차에 빵을 두고 다녀야 해서",
    href: "/checklist?group=packing",
  },
  {
    id: "gen-parking",
    title: "대흥동 원도심 주차장 미리 검색",
    reason: "골목이 좁아 노상 주차가 어려운 구역",
    href: "/checklist?group=drive",
  },
];

const GENERIC_PREP_THRESHOLD_DAYS = 5;

export function computePriorities(now: Date, venueBooked: Record<string, boolean>): PriorityItem[] {
  const todayIso = isoDate(now);
  const result: PriorityItem[] = [];

  for (const v of VENUE_INFO) {
    if (v.booking === "required" && !venueBooked[v.name]) {
      result.push({
        id: `venue-${v.id}`,
        title: `${v.name} 웨이팅 방식 확인`,
        reason: v.bookingNote ?? "아직 확인 안 됨",
        href: `/guide#venue-${v.id}`,
      });
    }
  }

  const dDay = daysBetween(todayIso, TRIP_META.start);
  if (dDay >= 0 && dDay <= GENERIC_PREP_THRESHOLD_DAYS) {
    result.push(...GENERIC_PREP);
  }

  if (result.length === 0) {
    return [
      {
        id: "none",
        title: "지금은 특별히 급한 게 없어요",
        reason: "체크리스트에서 천천히 나머지를 준비하시면 됩니다",
        href: "/checklist",
      },
    ];
  }

  return result;
}
