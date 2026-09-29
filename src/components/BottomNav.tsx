"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "오늘" },
  { href: "/itinerary", label: "일정" },
  { href: "/guide", label: "가이드" },
  { href: "/checklist", label: "체크리스트" },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottomnav">
      {TABS.map((tab) => {
        const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
        return (
          <Link key={tab.href} href={tab.href} className={`navlink${active ? " active" : ""}`}>
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
