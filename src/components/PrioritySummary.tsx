"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useNow } from "@/lib/useNow";
import { computePriorities } from "@/lib/priorityEngine";
import { loadVenueBooking } from "@/lib/venueBooking";

export default function PrioritySummary() {
  const now = useNow();
  const [venueBooked, setVenueBooked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setVenueBooked(loadVenueBooking());
  }, []);

  if (!now) return null;

  const priorities = computePriorities(now, venueBooked);

  return (
    <ol className="priority-list">
      {priorities.map((p, i) => {
        const content = (
          <>
            <span className="priority-num">{i + 1}</span>
            <span>
              <span className="priority-title">{p.title}</span>
              <span className="priority-reason">{p.reason}</span>
            </span>
          </>
        );
        return (
          <li key={p.id}>
            {p.href ? (
              <Link href={p.href} className="priority-row priority-row-link">
                {content}
              </Link>
            ) : (
              <div className="priority-row">{content}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
