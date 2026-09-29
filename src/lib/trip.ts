// 빵순이는 빵빵빵 — 대전 빵투어 단일 원본 일정 데이터.
// 시간은 대부분 추정치다 — 사용자가 준 건 순서와 몇 개의 기준 시각(10:00 출발, 19:00 음악분수)뿐이라,
// 각 장소 체류시간을 현실적으로 가늠해서 채워 넣었다. 실제로는 유동적으로 당겨지거나 밀릴 수 있음.
// 확정 숙소/예매가 없는 당일치기+1박 느낌의 여행이라 fixed는 시간이 못박힌 일정(음악분수)에만 썼다.

export type ItemStatus = "fixed" | "flexible";

export type ItemKind = "bakery" | "cafe" | "meal" | "sight" | "shop" | "move" | "rest";

export interface PlaceStop {
  ko: string;
  local?: string;
  lat?: number;
  lng?: number;
}

export interface ScheduleItem {
  id: string;
  label: string;
  start: string;
  end?: string;
  title: string;
  status: ItemStatus;
  kind: ItemKind;
  move?: string;
  note?: string;
  alert?: string;
  address?: string;
  stops?: PlaceStop[];
}

export interface TripDay {
  id: string;
  index: number;
  date: string;
  city: string;
  items: ScheduleItem[];
}

export const TRIP_META = {
  name: "빵순이는 빵빵빵",
  start: "2026-10-03",
  end: "2026-10-04",
  cities: ["대전"],
};

export const TRIP_DAYS: TripDay[] = [
  {
    id: "day1",
    index: 1,
    date: "2026-10-03",
    city: "대흥동 → 중앙시장 → 둔산·유성",
    items: [
      { id: "d1-1", label: "10:00", start: "10:00", title: "대전 도착 → 주차", status: "flexible", kind: "move" },
      {
        id: "d1-2",
        label: "10:15~10:45",
        start: "10:15",
        end: "10:45",
        title: "몽심 대흥점",
        status: "flexible",
        kind: "bakery",
        alert: "인기 메뉴는 오전에 품절될 수 있어요",
        stops: [{ ko: "몽심 대흥점", lat: 36.3256, lng: 127.4238 }],
      },
      {
        id: "d1-3",
        label: "10:45~11:30",
        start: "10:45",
        end: "11:30",
        title: "숍피크 → 폴라잇 소품샵 구경",
        status: "flexible",
        kind: "shop",
        note: "소품샵은 둘 다 20~30분 정도만 잡기",
        stops: [
          { ko: "숍피크", lat: 36.3244, lng: 127.423 },
          { ko: "폴라잇", lat: 36.3241, lng: 127.4226 },
        ],
      },
      {
        id: "d1-4",
        label: "11:30~12:00",
        start: "11:30",
        end: "12:00",
        title: "근현대사전시관 또는 테미오래",
        status: "flexible",
        kind: "sight",
        note: "둘이 가까워서 택1 추천 — 시간 되면 둘 다",
        stops: [
          { ko: "근현대사전시관", lat: 36.3283, lng: 127.4271 },
          { ko: "테미오래", lat: 36.3238, lng: 127.4228 },
        ],
      },
      {
        id: "d1-5",
        label: "12:00~12:20",
        start: "12:00",
        end: "12:20",
        title: "다다르다",
        status: "flexible",
        kind: "sight",
        stops: [{ ko: "다다르다", lat: 36.3268, lng: 127.4243 }],
      },
      { id: "d1-6", label: "12:20~12:40", start: "12:20", end: "12:40", title: "중앙시장 이동", status: "flexible", kind: "move" },
      {
        id: "d1-7",
        label: "12:40~13:30",
        start: "12:40",
        end: "13:30",
        title: "점심 — 중앙시장 우리칼국수",
        status: "flexible",
        kind: "meal",
        stops: [{ ko: "중앙시장 우리칼국수", lat: 36.3298, lng: 127.4291 }],
      },
      {
        id: "d1-8",
        label: "13:30~13:50",
        start: "13:30",
        end: "13:50",
        title: "차량 이동 (원도심 → 유성 엑스포)",
        status: "flexible",
        kind: "move",
        move: "차량",
      },
      {
        id: "d1-9",
        label: "13:50~14:20",
        start: "13:50",
        end: "14:20",
        title: "쁘띠정동문화사 빵 구매",
        status: "flexible",
        kind: "bakery",
        alert: "본점(중구)은 정오 전 도착 규칙 — 이 지점은 대기 방식이 다를 수 있어 방문 전 확인 추천",
        stops: [{ ko: "쁘띠정동문화사", lat: 36.3745, lng: 127.3845 }],
      },
      {
        id: "d1-10",
        label: "14:20~14:40",
        start: "14:20",
        end: "14:40",
        title: "차량 이동 (유성 → 둔산·시청)",
        status: "flexible",
        kind: "move",
        move: "차량",
      },
      {
        id: "d1-11",
        label: "14:40~15:10",
        start: "14:40",
        end: "15:10",
        title: "콜드버터베이크샵 시청점",
        status: "flexible",
        kind: "bakery",
        stops: [{ ko: "콜드버터베이크샵 시청점", lat: 36.3512, lng: 127.3822 }],
      },
      {
        id: "d1-12",
        label: "15:10~17:00",
        start: "15:10",
        end: "17:00",
        title: "한밭수목원 — 빵 먹으며 산책 · 자전거",
        status: "flexible",
        kind: "sight",
        stops: [{ ko: "한밭수목원", lat: 36.3564, lng: 127.3811 }],
      },
      { id: "d1-13", label: "17:00~17:20", start: "17:00", end: "17:20", title: "한빛탑 이동", status: "flexible", kind: "move" },
      {
        id: "d1-14",
        label: "17:20~18:00",
        start: "17:20",
        end: "18:00",
        title: "한빛탑",
        status: "flexible",
        kind: "sight",
        stops: [{ ko: "한빛탑", lat: 36.3739, lng: 127.3862 }],
      },
      { id: "d1-15", label: "18:00~19:00", start: "18:00", end: "19:00", title: "자유시간", status: "flexible", kind: "rest" },
      {
        id: "d1-16",
        label: "19:00",
        start: "19:00",
        title: "음악분수",
        status: "fixed",
        kind: "sight",
        note: "선택 일정 — 시간이 정해진 공연이라 fixed로 표시",
      },
      {
        id: "d1-17",
        label: "19:30~21:00",
        start: "19:30",
        end: "21:00",
        title: "저녁 — 사랑사랑방",
        status: "flexible",
        kind: "meal",
        stops: [{ ko: "사랑사랑방", lat: 36.3465, lng: 127.3752 }],
      },
    ],
  },
  {
    id: "day2",
    index: 2,
    date: "2026-10-04",
    city: "선화동 → 대전역",
    items: [
      {
        id: "d2-1",
        label: "09:30~10:30",
        start: "09:30",
        end: "10:30",
        title: "아침 카페 — 단위 선화",
        status: "flexible",
        kind: "cafe",
        stops: [{ ko: "단위 선화", lat: 36.3222, lng: 127.4213 }],
      },
      { id: "d2-2", label: "10:30~11:30", start: "10:30", end: "11:30", title: "선화동 골목 산책", status: "flexible", kind: "sight" },
      {
        id: "d2-3",
        label: "11:30~12:30",
        start: "11:30",
        end: "12:30",
        title: "점심 — 삼대째전통칼국수 (들깨칼국수)",
        status: "flexible",
        kind: "meal",
        stops: [{ ko: "삼대째전통칼국수", lat: 36.3308, lng: 127.4356 }],
      },
      {
        id: "d2-4",
        label: "12:30~13:00",
        start: "12:30",
        end: "13:00",
        title: "차량 이동 (대전역·롯데백화점 방향)",
        status: "flexible",
        kind: "move",
        move: "차량",
      },
      {
        id: "d2-5",
        label: "13:00~14:30",
        start: "13:00",
        end: "14:30",
        title: "성심당 (롯데백화점 대전점)",
        status: "flexible",
        kind: "bakery",
        alert: "웨이팅 난이도 높음 — 각오하고 가기",
        note: "본점 저녁 방문도 고려했지만 동선이 안 맞아 이번엔 롯데백화점 지점으로",
        stops: [{ ko: "성심당 (롯데백화점 대전점)", lat: 36.3315, lng: 127.4345 }],
      },
      {
        id: "d2-6",
        label: "14:30~15:30",
        start: "14:30",
        end: "15:30",
        title: "자유시간 (백화점 구경 · 오사카오코노미야끼 간식)",
        status: "flexible",
        kind: "rest",
      },
      { id: "d2-7", label: "15:30~", start: "15:30", title: "대전 출발", status: "flexible", kind: "move" },
    ],
  },
];

export function findDay(id: string): TripDay | undefined {
  return TRIP_DAYS.find((d) => d.id === id);
}

/** 그날 일정 순서대로 장소 이름 -> 방문 순번. 같은 곳을 두 번 들르면 처음 번호를 유지한다. */
export function visitOrderForDay(dayId: string): Record<string, number> {
  const day = findDay(dayId);
  if (!day) return {};
  const order: Record<string, number> = {};
  let n = 0;
  for (const item of day.items) {
    for (const stop of item.stops ?? []) {
      if (order[stop.ko] != null) continue;
      n += 1;
      order[stop.ko] = n;
    }
  }
  return order;
}
