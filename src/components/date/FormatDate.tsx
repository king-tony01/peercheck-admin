import styles from "./styles/FormatDate.module.css";

function FormatDate({ date, locale = "en-US", options }: DateFormater) {
  const resolvedDate = typeof date === "string" ? new Date(date) : date;

  if (Number.isNaN(resolvedDate.getTime())) {
    return <span className={styles.format_date}>Invalid date</span>;
  }

  const formatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: options?.short ? "short" : "long",
    day: "numeric",
  };

  if (options?.withTime) {
    formatOptions.hour = "numeric";
    formatOptions.minute = "numeric";
  }

  if (options?.withSeconds) {
    formatOptions.second = "numeric";
  }

  if (options?.withTimezone) {
    formatOptions.timeZoneName = "short";
  }

  const formatted = new Intl.DateTimeFormat(locale, formatOptions).format(
    resolvedDate,
  );

  return <span className={styles.format_date}>{formatted}</span>;
}

export default FormatDate;
