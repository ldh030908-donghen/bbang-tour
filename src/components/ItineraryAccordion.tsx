"use client";

import { useEffect, useState } from "react";
import { TRIP_DAYS } from "@/lib/trip";
import { weekdayKo, formatDateShort } from "@/lib/date";
import { getTripPhase } from "@/lib/phase";
import DayCard from "./DayCard";

export default function ItineraryAccordion() {
  const [openId, setOpenId] = useState("day1");
  const [currentItemId, setCurrentItemId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const hashId = window.location.hash.replace("#", "");
    const hashMatch = TRIP_DAYS.find((d) => d.id === hashId);
    if (hashMatch) {
      setOpenId(hashMatch.id);
      requestAnimationFrame(() => {
        document.getElementById(hashMatch.id)?.scrollIntoView({ block: "start" });
      });
      return;
    }
    const phase = getTripPhase(new Date());
    if (phase.kind === "during") {
      setOpenId(phase.day.id);
      setCurrentItemId(phase.currentItemId);
    }
  }, []);

  return (
    <div className="accordion">
      {TRIP_DAYS.map((day) => {
        const isOpen = openId === day.id;
        const fixedCount = day.items.filter((i) => i.status === "fixed").length;
        return (
          <details
            key={day.id}
            id={day.id}
            open={isOpen}
            className="day-details"
            onToggle={(e) => {
              if (e.currentTarget.open) setOpenId(day.id);
            }}
          >
            <summary className="day-summary">
              <span className="day-summary-top">
                <span className="day-summary-main">
                  <span className="day-summary-index">DAY{day.index}</span>
                  <span className="day-summary-date">
                    {formatDateShort(day.date)}({weekdayKo(day.date)})
                  </span>
                </span>
                <span className="day-summary-right">
                  {fixedCount > 0 && <span className="badge-fixed">확정 {fixedCount}</span>}
                  <span className="chevron" aria-hidden />
                </span>
              </span>
              <span className="day-summary-city">{day.city}</span>
            </summary>
            <div className="day-details-body">
              <DayCard day={day} currentItemId={isOpen ? currentItemId : undefined} showHeader={false} />
            </div>
          </details>
        );
      })}
    </div>
  );
}
