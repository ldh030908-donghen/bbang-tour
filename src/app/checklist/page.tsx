"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CHECKLIST_GROUPS } from "@/lib/checklist";

const STORAGE_KEY = "bbang-tour-checklist";

function ChecklistBody() {
  const searchParams = useSearchParams();
  const groupParam = searchParams.get("group");
  const initialGroup = CHECKLIST_GROUPS.find((g) => g.id === groupParam)?.id ?? CHECKLIST_GROUPS[0].id;

  const [activeGroup, setActiveGroup] = useState(initialGroup);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      // 개인정보 보호 모드 등에서 localStorage 접근이 막힐 수 있음 — 무시하고 빈 상태로 진행
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // 저장 실패해도 화면 사용에는 지장 없음
    }
  }, [checked, loaded]);

  const group = CHECKLIST_GROUPS.find((g) => g.id === activeGroup)!;
  const doneCount = group.items.filter((i) => checked[i.id]).length;

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <>
      <div className="page-title">체크리스트</div>
      <div className="page-sub">체크 상태는 이 폰에만 저장됩니다.</div>

      <div className="checklist-tabs">
        {CHECKLIST_GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            className={`checklist-tab${g.id === activeGroup ? " active" : ""}`}
            onClick={() => setActiveGroup(g.id)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="checklist-progress">
        <span>
          {doneCount} / {group.items.length} 완료
        </span>
        <div className="checklist-progress-bar">
          <div
            className="checklist-progress-fill"
            style={{ width: `${group.items.length ? (doneCount / group.items.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      <ul className="checklist-list">
        {group.items.map((item) => {
          const done = Boolean(checked[item.id]);
          return (
            <li key={item.id}>
              <label className={`checklist-item${done ? " done" : ""}`}>
                <input type="checkbox" checked={done} onChange={() => toggle(item.id)} />
                <span>
                  <span className="checklist-item-text">{item.text}</span>
                  {item.note && <span className="checklist-item-note">{item.note}</span>}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default function ChecklistPage() {
  return (
    <Suspense fallback={null}>
      <ChecklistBody />
    </Suspense>
  );
}
