import type { ScheduleItem } from "@/lib/trip";
import { dirUrl } from "@/lib/maps";
import { findDesc } from "@/lib/mapPoints";

const KIND_LABEL: Partial<Record<ScheduleItem["kind"], string>> = {
  bakery: "빵집",
  cafe: "카페",
  meal: "식사",
  shop: "쇼핑",
  rest: "휴식",
  move: "이동",
};

export default function ScheduleItemRow({
  item,
  current = false,
}: {
  item: ScheduleItem;
  current?: boolean;
}) {
  const tag = item.move ?? KIND_LABEL[item.kind];
  const hasDetail = Boolean(item.stops?.length || item.address);

  return (
    <li className={`item-row status-${item.status}${current ? " item-current" : ""}`}>
      <div className="item-top">
        <span className="item-time">{item.label}</span>
        {tag && <span className="item-tag">{tag}</span>}
        {current && <span className="item-now">지금</span>}
      </div>
      <p className="item-title">{item.title}</p>
      {item.note && <p className="item-note">{item.note}</p>}
      {item.alert && <p className="item-alert">{item.alert}</p>}
      {hasDetail && (
        <details className="place-detail">
          <summary>장소 · 길찾기</summary>
          <ul className="stop-list">
            {item.address && (
              <li className="stop">
                <span className="stop-name">{item.address}</span>
                <a className="maps-btn" href={dirUrl({ address: item.address })} target="_blank" rel="noreferrer">
                  길찾기
                </a>
              </li>
            )}
            {item.stops?.map((stop) => {
              const desc = findDesc(stop.ko);
              return (
                <li className="stop" key={stop.ko}>
                  <div>
                    <span className="stop-name">
                      {stop.ko}
                      {stop.local && <span className="stop-local"> · {stop.local}</span>}
                    </span>
                    {desc && <p className="stop-desc">{desc}</p>}
                  </div>
                  <a className="maps-btn" href={dirUrl(stop)} target="_blank" rel="noreferrer">
                    길찾기
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
      )}
    </li>
  );
}
