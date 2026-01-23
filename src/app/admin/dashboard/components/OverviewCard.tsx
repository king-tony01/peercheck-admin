import Link from "next/link";
import Chip from "./Chip";
import styles from "./styles/OverviewCard.module.css";
import ArrowUpRight from "@/icons/ArrowUpRight";

function OverviewCard({ title, value, icon, trend, chip }: OverviewCard) {
  return (
    <div className={styles.overview_card}>
      <div className={styles.top}>
        {icon}
        <h5 className={styles.title}>{title}</h5>
      </div>
      <div className={styles.value_section}>
        <h2>{value}</h2>
        {trend && (
          <Chip
            label={`${trend.percentage}%`}
            color={trend.direction === "up" ? "green" : "red"}
            direction={trend.direction}
          />
        )}
        {chip && <Chip label={chip.label} color={chip.color} />}
      </div>
      <Link href="#" className={styles.view_more}>
        <ArrowUpRight />
      </Link>
    </div>
  );
}

export default OverviewCard;
