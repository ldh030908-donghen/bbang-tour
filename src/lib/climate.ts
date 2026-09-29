// 10월 초 평년 기온(참고용 평균치, 실시간 예보 아님 — 방문일이 다가오면 실제 예보로 자동 전환됨).

export interface CityClimate {
  city: string;
  highC: number;
  lowC: number;
  rainNote: string;
  clothing: string;
}

export const OCTOBER_CLIMATE: CityClimate = {
  city: "대전",
  highC: 23,
  lowC: 12,
  rainNote: "대체로 맑음, 아침저녁 선선함",
  clothing: "가벼운 긴팔 + 얇은 겉옷. 낮엔 반팔도 괜찮음, 저녁엔 걸칠 옷 하나",
};
