import PendingIcon from "@/icons/PendingIcon";
import SuccessIcon from "@/icons/SuccessIcon";
import styles from "./styles/FormatStatus.module.css";

function FormatStatus({ status }: { status: string }) {
  return (
    <div className={styles.format_status}>
      {status === "Completed" || status === "Approved" ? (
        <SuccessIcon />
      ) : status === "Pending" ? (
        <PendingIcon />
      ) : null}
      <span>{status}</span>
    </div>
  );
}

export default FormatStatus;
