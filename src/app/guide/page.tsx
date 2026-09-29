import type { Metadata } from "next";
import VenueChecklist from "@/components/VenueChecklist";

export const metadata: Metadata = {
  title: "가이드 · 빵순이는 빵빵빵",
};

export default function GuidePage() {
  return (
    <>
      <div className="page-title">가이드</div>
      <div className="page-sub">매장별 웨이팅 난이도와 대기 방식을 여기서 한번에 확인하세요.</div>

      <div className="section-label">웨이팅 · 대기 방식 체크표</div>
      <p className="guide-disclaimer">
        운영시간과 대기 방식은 매장 사정에 따라 자주 바뀝니다. 아래는 사용자가 전달한 정보를 정리한 참고용이며, 방문
        직전 캐치테이블·매장 SNS로 다시 확인하세요. 확인을 마쳤으면 체크해두세요 — 홈 화면 "지금 해야 할 일"에서
        자동으로 빠집니다.
      </p>
      <VenueChecklist />
    </>
  );
}
