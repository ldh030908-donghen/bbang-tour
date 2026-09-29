// 지도용 핀 데이터. 좌표는 정확한 지오코딩이 아니라 동네 단위 추정치(approx: true)다 —
// 실제 길찾기는 항상 주소 텍스트로 구글맵에 넘어가니 오차는 문제되지 않는다.

export type PointCategory = "bakery" | "cafe" | "meal" | "sight";

export interface MapPoint {
  id: string;
  category: PointCategory;
  ko: string;
  local?: string;
  lat: number;
  lng: number;
  addr?: string;
  dayIds: string[];
  approx?: boolean;
  desc?: string;
}

export const CATEGORY_LABEL: Record<PointCategory, string> = {
  bakery: "빵집",
  cafe: "카페",
  meal: "밥집",
  sight: "구경",
};

export const MAP_POINTS: MapPoint[] = [
  // ---- DAY1 ----
  {
    id: "mongsim",
    category: "bakery",
    ko: "몽심 대흥점",
    lat: 36.3256,
    lng: 127.4238,
    addr: "대전 중구 중교로32",
    dayIds: ["day1"],
    approx: true,
    desc: "마들렌(레몬·피칸·밀키)과 클래식 휘낭시에가 시그니처. 현장 웨이팅 9시, 캐치테이블 9시 30분 오픈. 배달도 가능.",
  },
  {
    id: "shopeak",
    category: "sight",
    ko: "숍피크",
    lat: 36.3244,
    lng: 127.423,
    addr: "콜드버터베이크샵과 같은 건물",
    dayIds: ["day1"],
    approx: true,
    desc: "소품샵. 폴라잇이랑 같이 20~30분 정도만 잡고 둘러보기 좋음.",
  },
  {
    id: "polite",
    category: "sight",
    ko: "폴라잇",
    lat: 36.3241,
    lng: 127.4226,
    addr: "대전 중구 보문로260번길 13, 3층",
    dayIds: ["day1"],
    approx: true,
    desc: "소품샵. 숍피크와 세트로 짧게.",
  },
  {
    id: "modern-history",
    category: "sight",
    ko: "근현대사전시관",
    lat: 36.3283,
    lng: 127.4271,
    addr: "대전 중구 중앙로85",
    dayIds: ["day1"],
    approx: true,
    desc: "테미오래와 가까워서 굳이 둘 다 안 가도 됨 — 택1 추천.",
  },
  {
    id: "temiorae",
    category: "sight",
    ko: "테미오래",
    lat: 36.3238,
    lng: 127.4228,
    addr: "대전 중구 보문로205번길 13",
    dayIds: ["day1"],
    approx: true,
    desc: "근현대사전시관과 가까워서 택1 추천. 카페 '소설'이 바로 옆에 있음.",
  },
  {
    id: "dadareuda",
    category: "sight",
    ko: "다다르다",
    lat: 36.3268,
    lng: 127.4243,
    addr: "대전 중구 중교로73번길 6",
    dayIds: ["day1"],
    approx: true,
  },
  {
    id: "jungang-market",
    category: "meal",
    ko: "중앙시장 우리칼국수",
    lat: 36.3298,
    lng: 127.4291,
    addr: "초록 간판, 시장 끝",
    dayIds: ["day1"],
    approx: true,
    desc: "중앙시장 안 칼국수집.",
  },
  {
    id: "petit-jeongdong",
    category: "bakery",
    ko: "쁘띠정동문화사",
    local: "정동문화사 유성점",
    lat: 36.3745,
    lng: 127.3845,
    addr: "대전 유성구 엑스포로123번길 34, 1층 104/105호",
    dayIds: ["day1"],
    approx: true,
    desc: "휘낭시에·에그타르트. 본점(중구, 정오 전 도착 필요)과는 다른 지점이라 대기 방식이 다를 수 있음 — 방문 전 확인 추천.",
  },
  {
    id: "coldbutter-cityhall",
    category: "bakery",
    ko: "콜드버터베이크샵 시청점",
    lat: 36.3512,
    lng: 127.3822,
    addr: "대전 서구 둔산로64번길 33, 1층",
    dayIds: ["day1"],
    approx: true,
    desc: "고구마빵·우유소금빵. 중구 본점(11시 30분 웨이팅·12시 캐치테이블)과는 다른 지점이라 대기 방식이 다를 수 있음.",
  },
  {
    id: "hanbat-arboretum",
    category: "sight",
    ko: "한밭수목원",
    lat: 36.3564,
    lng: 127.3811,
    addr: "대전 서구 둔산대로169",
    dayIds: ["day1"],
    desc: "빵 먹으면서 산책하고 자전거 타기 좋은 곳.",
  },
  {
    id: "hanbit-tower",
    category: "sight",
    ko: "한빛탑",
    lat: 36.3739,
    lng: 127.3862,
    addr: "대전 유성구 엑스포로 (엑스포과학공원)",
    dayIds: ["day1"],
    approx: true,
  },
  {
    id: "sarang-sarangbang",
    category: "meal",
    ko: "사랑사랑방",
    lat: 36.3465,
    lng: 127.3752,
    addr: "대전 서구 갈마중로49-14",
    dayIds: ["day1"],
    approx: true,
  },

  // ---- DAY2 ----
  {
    id: "danwi-seonhwa",
    category: "cafe",
    ko: "단위 선화",
    lat: 36.3222,
    lng: 127.4213,
    addr: "대전 중구 선화로97번길 59-2",
    dayIds: ["day2"],
    approx: true,
  },
  {
    id: "samdaejjae",
    category: "meal",
    ko: "삼대째전통칼국수",
    lat: 36.3308,
    lng: 127.4356,
    addr: "대전 동구 대전로825번길 13",
    dayIds: ["day2"],
    approx: true,
    desc: "들깨칼국수.",
  },
  {
    id: "sungsimdang-lotte",
    category: "bakery",
    ko: "성심당 (롯데백화점 대전점)",
    lat: 36.3315,
    lng: 127.4345,
    addr: "대전역 인근 롯데백화점 대전점",
    dayIds: ["day2"],
    approx: true,
    desc: "알밤롤·명란바게트(소금빵)·생귤시루·작은메아리·티그레·김치찹쌀주먹밥(정시 판매). 웨이팅 난이도 높음 — 일요일이라 롯데백화점 지점으로.",
  },
  {
    id: "hinari",
    category: "cafe",
    ko: "희나리",
    lat: 36.3518,
    lng: 127.3798,
    addr: "대전 서구 둔산로218번길 15, 2층",
    dayIds: [],
    approx: true,
    desc: "찻집 — 커피는 없음. 시간 되면 들르기 좋은 후보.",
  },
  {
    id: "cowboy-lp",
    category: "meal",
    ko: "카우보이 LP바",
    lat: 36.3272,
    lng: 127.4262,
    addr: "대전 중구 중앙로122번길 38",
    dayIds: [],
    approx: true,
  },
  {
    id: "osaka-okonomiyaki",
    category: "meal",
    ko: "오사카오코노미야끼",
    lat: 36.3283,
    lng: 127.427,
    addr: "대전 중구 중앙로156번길 41-12",
    dayIds: [],
    approx: true,
  },
  {
    id: "meditation-garden",
    category: "sight",
    ko: "명상정원",
    lat: 36.2967,
    lng: 127.465,
    addr: "대전 동구 추동680",
    dayIds: [],
    approx: true,
    desc: "시내에서 꽤 떨어진 산속 — 이번 동선엔 안 넣었지만 시간 여유 있으면 고려.",
  },
  {
    id: "sungsimdang-main",
    category: "bakery",
    ko: "성심당 본점",
    lat: 36.3293,
    lng: 127.4283,
    addr: "대전역 인근 (은행동)",
    dayIds: [],
    approx: true,
    desc: "웨이팅 난이도 매우 높음, 저녁 8시 이후가 그나마 나음. 이번엔 동선상 뺐지만 다음에 저녁 일정으로 노려볼만함.",
  },
];

export function pointsForDay(dayId: string): MapPoint[] {
  return MAP_POINTS.filter((p) => p.dayIds.includes(dayId));
}

/** 홈 화면 전체 지도용 — 실제 일정에 들어간 곳만 (검토용 후보지는 제외). */
export const OVERVIEW_POINTS: MapPoint[] = MAP_POINTS.filter((p) => p.dayIds.length > 0);

/** 이름으로 설명을 찾는다 — 일정 탭 장소 상세에서 지도 데이터를 재사용할 때 씀. */
export function findDesc(ko: string): string | undefined {
  return MAP_POINTS.find((p) => p.ko === ko)?.desc;
}
