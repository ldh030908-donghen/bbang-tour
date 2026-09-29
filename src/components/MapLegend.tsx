import { CATEGORY_LABEL, type PointCategory } from "@/lib/mapPoints";

const ORDER: PointCategory[] = ["bakery", "cafe", "meal", "sight"];

export default function MapLegend() {
  return (
    <div className="map-legend">
      {ORDER.map((cat) => (
        <span className="map-legend-item" key={cat}>
          <span className={`map-legend-dot cat-${cat}`} />
          {CATEGORY_LABEL[cat]}
        </span>
      ))}
    </div>
  );
}
