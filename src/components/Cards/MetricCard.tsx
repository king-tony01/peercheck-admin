import Link from "next/link";
import styles from "./styles/MetricCard.module.css";
import ArrowUpRight from "@/icons/ArrowUpRight";
import Chip from "./Chip";
import EllipsisHorizontal from "@/icons/EllipsisHorizontal";
import ActionDropdown from "../Input/ActionDropdown";

function MetricCard({
  title,
  value,
  icon,
  trend,
  chip,
  type,
  path = "#",
  options,
}: MetricCard) {
  return (
    <div className={styles.metric_card}>
      <div className={styles.top}>
        {icon}
        <h5 className={styles.title}>{title}</h5>
      </div>
      <div className={styles.value_section}>
        <h2>{typeof value === "number" ? value.toLocaleString() : value}</h2>
        {trend && (
          <Chip
            label={`${trend.percentage}%`}
            color={trend.direction === "up" ? "green" : "red"}
            direction={trend.direction}
          />
        )}
        {chip && <Chip label={chip.label} color={chip.color} />}
      </div>
      {type === "link" ? (
        <Link href={path} className={styles.action_btn}>
          <ArrowUpRight />
        </Link>
      ) : (
        <div className={styles.action_btn_drop}>
          <ActionDropdown
            options={options ?? []}
            type="secondary"
            position="top-right"
            customIcon={<EllipsisHorizontal />}
          />
        </div>
      )}
    </div>
  );
}

export default MetricCard;
