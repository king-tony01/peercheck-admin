import SideBar from "@/layouts/SideBar/SideBar";
import React from "react";
import styles from "./styles/MainLayout.module.css";
import TopBar from "@/layouts/TopBar/TopBar";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.admin_layout}>
      <SideBar />
      <div className={styles.main_content}>
        <TopBar />
        <div className={styles.content_area}>{children}</div>
      </div>
    </main>
  );
}

export default AdminLayout;
