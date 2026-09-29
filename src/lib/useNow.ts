"use client";

import { useEffect, useState } from "react";

/** 마운트 전에는 null(서버와 동일한 초기 화면), 마운트 후 기기 시각으로 주기 갱신. */
export function useNow(intervalMs = 60_000): Date | null {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);

  return now;
}
