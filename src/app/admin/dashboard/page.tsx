import React from "react";
import Overview from "./Overview";
import Charts from "./Charts";
import RecentActivity from "./RecentActivity";

function Dashboard() {
  return (
    <section>
      <Overview />
      <Charts />
      <RecentActivity />
    </section>
  );
}

export default Dashboard;
