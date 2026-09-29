"use client";

import Link from "next/link";
import { useNow } from "@/lib/useNow";
import { getTripPhase } from "@/lib/phase";
import { TRIP_META, TRIP_DAYS } from "@/lib/trip";
import { OVERVIEW_POINTS } from "@/lib/mapPoints";
import { isoDate, formatDateKo, weekdayKo } from "@/lib/date";
import DayCard from "@/components/DayCard";
import TripMap from "@/components/TripMap";
import MapLegend from "@/components/MapLegend";
import BreadHero from "@/components/BreadHero";
import WeatherCard from "@/components/WeatherCard";
import PrioritySummary from "@/components/PrioritySummary";

function nearestDay(now: Date) {
  const today = isoDate(now);
  return TRIP_DAYS.find((d) => d.date >= today) ?? TRIP_DAYS[TRIP_DAYS.length - 1];
}

function Mosaic() {
  return (
    <div className="mosaic" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}

function BeforeView({ now, dDay }: { now: Date; dDay: number }) {
  const upcoming = nearestDay(now);

  return (
    <>
      <BreadHero kicker="대전 원도심 빵지순례" title="빵순이는 빵빵빵" subtitle="1박 2일 · 대전 빵투어" />
      <Mosaic />

      <div className="section-label">10월 날씨</div>
      <WeatherCard />

      <div className="dday-bar">
        <span className="dday-chip">D-{dDay}</span>
        <span className="dday-range">
          {TRIP_META.start} → {TRIP_META.end} · 1박 2일
        </span>
      </div>

      <div className="section-label">지금 해야 할 일</div>
      <PrioritySummary />

      <div className="section-label">방문 예정지</div>
      <TripMap points={OVERVIEW_POINTS} />
      <MapLegend />

      <div className="section-label">다가오는 일정</div>
      <DayCard day={upcoming} />
      <p style={{ marginTop: 16, textAlign: "center" }}>
        <Link href="/itinerary" className="link-button">
          전체 일정 보기 →
        </Link>
      </p>
    </>
  );
}

function DuringView({ day, currentItemId }: { day: (typeof TRIP_DAYS)[number]; currentItemId?: string }) {
  return (
    <>
      <BreadHero title={`DAY${day.index} · ${formatDateKo(day.date)}`} subtitle={`${day.city} (${weekdayKo(day.date)})`} />
      <WeatherCard date={day.date} />
      <div className="page-title" style={{ marginTop: 20 }}>
        오늘
      </div>
      <DayCard day={day} currentItemId={currentItemId} />
      <p style={{ marginTop: 16, textAlign: "center" }}>
        <Link href="/itinerary" className="link-button">
          다른 날짜 보기 →
        </Link>
      </p>
    </>
  );
}

function AfterView() {
  return (
    <div className="card" style={{ textAlign: "center", padding: "36px 18px" }}>
      <p style={{ fontWeight: 700, fontSize: "1.1rem" }}>1박 2일 빵투어가 끝났습니다</p>
      <p style={{ marginTop: 8, color: "var(--ink-soft)" }}>수고하셨습니다. 지난 일정은 언제든 다시 볼 수 있어요.</p>
      <p style={{ marginTop: 16 }}>
        <Link href="/itinerary" className="link-button">
          전체 일정 다시 보기 →
        </Link>
      </p>
    </div>
  );
}

export default function HomePage() {
  const now = useNow();

  return (
    <>
      {!now ? (
        <div className="empty-note">불러오는 중…</div>
      ) : (
        (() => {
          const phase = getTripPhase(now);
          if (phase.kind === "before") return <BeforeView now={now} dDay={phase.dDay} />;
          if (phase.kind === "during") return <DuringView day={phase.day} currentItemId={phase.currentItemId} />;
          return <AfterView />;
        })()
      )}
    </>
  );
}
