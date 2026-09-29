import { visitOrderForDay, type TripDay } from "@/lib/trip";
import { weekdayKo, formatDateKo } from "@/lib/date";
import { pointsForDay } from "@/lib/mapPoints";
import ScheduleItemRow from "./ScheduleItemRow";
import TripMap from "./TripMap";
import MapLegend from "./MapLegend";

export default function DayCard({
  day,
  currentItemId,
  showHeader = true,
  showMap = true,
}: {
  day: TripDay;
  currentItemId?: string;
  showHeader?: boolean;
  showMap?: boolean;
}) {
  const dayPoints = pointsForDay(day.id);
  const fixedCount = day.items.filter((i) => i.status === "fixed").length;

  return (
    <div className="day-card">
      {showHeader && (
        <div className="day-card-head">
          <div>
            <div className="day-card-date">
              DAY{day.index} · {formatDateKo(day.date)}({weekdayKo(day.date)})
            </div>
            <div className="day-card-city">{day.city}</div>
          </div>
          {fixedCount > 0 && <span className="badge-fixed">확정 {fixedCount}</span>}
        </div>
      )}
      {showMap && dayPoints.length > 0 && (
        <>
          <TripMap points={dayPoints} compact orderMap={visitOrderForDay(day.id)} />
          <MapLegend />
          <p className="map-hint">번호는 그날 방문 순서예요.</p>
        </>
      )}
      <ul className="timeline">
        {day.items.map((item) => (
          <ScheduleItemRow key={item.id} item={item} current={item.id === currentItemId} />
        ))}
      </ul>
    </div>
  );
}
