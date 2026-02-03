import ArrowUpRight from "@/icons/ArrowUpRight";
import styles from "./styles/Chip.module.css";
import ArrowDownRight from "@/icons/ArrowDownRight";
function Chip({ label, color, direction }: Chip) {
  return (
    <div className={`${styles.chip} ${styles[color]}`}>
      <span>{label}</span>
      {direction &&
        (direction === "up" ? (
          <ArrowUpRight />
        ) : (
          <ArrowDownRight color="#FF3B30" />
        ))}
    </div>
  );
}

export default Chip;
