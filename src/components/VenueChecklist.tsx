"use client";

import { useEffect, useState } from "react";
import { TRIP_DAYS } from "@/lib/trip";
import { VENUE_INFO, BOOKING_LABEL } from "@/lib/venueInfo";
import { loadVenueBooking, saveVenueBooking } from "@/lib/venueBooking";

export default function VenueChecklist() {
  const [booked, setBooked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setBooked(loadVenueBooking());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveVenueBooking(booked);
  }, [booked, loaded]);

  function toggle(name: string) {
    setBooked((prev) => ({ ...prev, [name]: !prev[name] }));
  }

  return (
    <div className="venue-list">
      {VENUE_INFO.map((v) => {
        const day = TRIP_DAYS.find((d) => d.id === v.dayId);
        const isBooked = Boolean(booked[v.name]);
        const canBook = v.booking !== "unnecessary";
        return (
          <div className="venue-card" id={`venue-${v.id}`} key={v.id}>
            <div className="venue-head">
              <span className="venue-name">{v.name}</span>
              {canBook ? (
                <label className={`venue-booking-toggle b-${v.booking}${isBooked ? " done" : ""}`}>
                  <input type="checkbox" checked={isBooked} onChange={() => toggle(v.name)} />
                  {isBooked ? "예매완료" : BOOKING_LABEL[v.booking]}
                </label>
              ) : (
                <span className={`venue-booking b-${v.booking}`}>{BOOKING_LABEL[v.booking]}</span>
              )}
            </div>
            <div className="venue-meta">
              {day ? `DAY${day.index}` : ""} · 휴관 {v.closedOn} · {v.hoursNote}
            </div>
            {v.bookingNote && <div className="venue-note">{v.bookingNote}</div>}
          </div>
        );
      })}
    </div>
  );
}
