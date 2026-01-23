import React from "react";
import EngagementAreaChart from "./components/EngagementAreaChart";
import ReviewsCategoryBarChart from "./components/ReviewsCategoryBarChart";
import styles from "./styles/Dashboard.module.css";

function Charts() {
  const engagementData = [
    { month: "Jan", users: 0, reviews: 0 },
    { month: "Feb", users: 3200, reviews: 2800 },
    { month: "Mar", users: 2600, reviews: 2900 },
    { month: "Apr", users: 1800, reviews: 2100 },
    { month: "May", users: 3400, reviews: 3100 },
    {
      month: "Jun",
      users: 6400,
      reviews: 6000,
      highlight: "June 2025 - 3,420 active users",
    },
    { month: "Jul", users: 5200, reviews: 5400 },
    { month: "Aug", users: 4600, reviews: 5000 },
    { month: "Sep", users: 5200, reviews: 5600 },
    { month: "Oct", users: 8600, reviews: 9200 },
    { month: "Nov", users: 9100, reviews: 10200 },
    { month: "Dec", users: 8800, reviews: 9400 },
  ];

  const reviewCategoryData = [
    { category: "Salary", value: 4200, color: "#8CD9EB" },
    { category: "Institutions", value: 3100, color: "#DCBEF4" },
    { category: "Culture", value: 6200, color: "#B2E74C" },
    { category: "Interview", value: 2400, color: "#EBB463" },
  ];

  return (
    <section className={styles.charts}>
      <div className={styles.chart}>
        <EngagementAreaChart
          title="The Pulse of Peercheck"
          subtitle="User Engagement Overview"
          data={engagementData}
        />
      </div>
      <div className={styles.chart}>
        <ReviewsCategoryBarChart
          title="Total Reviews"
          subtitle="By categories"
          data={reviewCategoryData}
        />
      </div>
    </section>
  );
}

export default Charts;
