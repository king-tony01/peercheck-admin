import React from "react";
import styles from "./styles/PageLayout.module.css";

function PageLayout({
  children,
  title = "Page title here",
  rightNodes,
  leftNodes,
}: {
  children: React.ReactNode;
  title: string;
  rightNodes?: React.ReactNode;
  leftNodes?: React.ReactNode;
}) {
  return (
    <div className={styles.page_layout}>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <h4>{title}</h4>
          {rightNodes}
        </div>
        <div className={styles.header_right}>{leftNodes}</div>
      </div>
      {children}
    </div>
  );
}

export default PageLayout;
