import type { Metadata } from "next";
import ItineraryAccordion from "@/components/ItineraryAccordion";

export const metadata: Metadata = {
  title: "일정 · 빵순이는 빵빵빵",
};

export default function ItineraryPage() {
  return (
    <>
      <div className="page-title">일정</div>
      <div className="page-sub">날짜를 눌러 펼쳐보세요. 오늘 날짜는 자동으로 열립니다.</div>

      <div className="legend">
        <div className="legend-row">
          <span className="legend-swatch fixed" /> 확정 — 시간이 정해진 일정 (공연 등)
        </div>
        <div className="legend-row">
          <span className="legend-swatch flexible" /> 자유 — 상황 따라 바뀔 수 있음
        </div>
      </div>

      <div className="section-label">일자별 일정</div>
      <ItineraryAccordion />
    </>
  );
}
