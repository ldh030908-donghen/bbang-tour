// 출발 전 준비 체크리스트. 편집이 필요하면 이 배열만 고치면 됨.
// 체크 여부는 각자 폰에 localStorage로 저장 — 공용 서버 없음.

export interface ChecklistItem {
  id: string;
  text: string;
  /** 항목 아래 작게 붙는 보충 설명 (날짜, 주의사항 등) */
  note?: string;
}

export interface ChecklistGroup {
  id: string;
  label: string;
  items: ChecklistItem[];
}

export const CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    id: "waiting",
    label: "웨이팅·예약",
    items: [
      { id: "w1", text: "캐치테이블 앱 설치 + 로그인 확인", note: "몽심·콜드버터 시청점 등 현장에서 바로 잡아야 함" },
      { id: "w2", text: "쁘띠정동문화사(유성점) 대기 방식 방문 전 확인", note: "본점(중구)의 '정오 전 도착' 룰이 이 지점도 적용되는지 매장 SNS·전화로 재확인" },
      { id: "w3", text: "콜드버터베이크샵 시청점 대기 방식 방문 전 확인", note: "본점 룰(11시 30분 웨이팅·12시 캐치테이블)과 다를 수 있음" },
      { id: "w4", text: "성심당 웨이팅 각오하고 마음 비우기", note: "롯데백화점 지점도 난이도 높음 — 대기 중 먹을 간식 하나 챙기면 좋음" },
      { id: "w5", text: "정동문화사·콜드버터 인기 메뉴 미리 정해두기", note: "고민하는 사이 품절될 수 있어서" },
    ],
  },
  {
    id: "drive",
    label: "차·주차",
    items: [
      { id: "c1", text: "대흥동 원도심 주차장 미리 검색", note: "골목이 좁아 노상 주차 어려움 — 공영주차장 위치 확인" },
      { id: "c2", text: "하이패스 단말기 잔액 확인" },
      { id: "c3", text: "구글맵에 오늘 동선 주소 미리 저장", note: "빵집·카페·수목원 등 한 번에 찾기 쉽게" },
    ],
  },
  {
    id: "packing",
    label: "짐·준비물",
    items: [
      { id: "p1", text: "빵 담을 보냉백 + 아이스팩", note: "차에서 여러 시간 두고 다니니까 필수" },
      { id: "p2", text: "여분 종이백 · 에코백", note: "빵집마다 포장 늘어나는 거 대비" },
      { id: "p3", text: "편한 신발", note: "원도심·수목원 도보 구간이 꽤 있음" },
      { id: "p4", text: "보조배터리 + 충전 케이블", note: "사진 많이 찍을 예정" },
      { id: "p5", text: "우산 또는 우비", note: "10월 초 갑작스런 비 대비" },
      { id: "p6", text: "현금 소액 준비", note: "일부 소품샵·시장은 카드 안 될 수 있음" },
      { id: "p7", text: "한밭수목원 자전거 대여용 여분 옷", note: "활동하기 편한 복장으로 갈아입을 경우 대비" },
    ],
  },
  {
    id: "morning",
    label: "당일 아침 체크",
    items: [
      { id: "m1", text: "각 매장 그날 휴무·오픈시간 재확인", note: "공휴일·연휴엔 임시 휴무 있을 수 있음" },
      { id: "m2", text: "몽심 대흥점 9시 오픈 전 도착 여부 결정", note: "일찍 갈수록 인기 메뉴 확보 유리" },
      { id: "m3", text: "날씨 확인 후 우산·겉옷 최종 챙기기" },
    ],
  },
  {
    id: "gift",
    label: "선물·포장",
    items: [
      { id: "g1", text: "선물용으로 나눠줄 사람 리스트 정리", note: "빵 종류·수량 미리 가늠하면 편함" },
      { id: "g2", text: "상온 보관 가능한 빵 위주로 선물용 고르기", note: "생크림·유제품 든 빵은 당일 소비 위주로" },
    ],
  },
];
