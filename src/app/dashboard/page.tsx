import React from "react";
import Charts from "./Charts";
import RecentActivity from "./RecentActivity";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import styles from "./styles/Dashboard.module.css";
import DropdownInput from "@/components/Input/DropdownInput";
import Button from "@/components/Button/Button";
import ExportIcon from "@/icons/ExportIcon";
import ClipBoardIcon from "@/icons/ClipBoardIcon";
import CompaniesIcon from "@/icons/CompaniesIcon";
import InstitutionsIcon from "@/icons/InstitutionsIcon";
import UsersIcon from "@/icons/UsersIcon";
import ReviewsIcon from "@/icons/ReviewsIcon";
import MetricCard from "@/components/Cards/MetricCard";

function Dashboard() {
  const overviewCards: MetricCard[] = [
    {
      title: "All Companies",
      value: 36681,
      icon: <CompaniesIcon />,
      chip: { label: "+312", color: "green" },
      type: "link",
      path: "/admin/companies",
    },
    {
      title: "All Institutions",
      value: 1214,
      icon: <InstitutionsIcon />,
      chip: { label: "+312", color: "green" },
      type: "link",
      path: "/admin/institutions",
    },
    {
      title: "Total Users",
      value: 124580,
      icon: <UsersIcon />,
      trend: { direction: "down", percentage: 13.5 },
      type: "link",
      path: "/admin/analytics/user-insights",
    },
    {
      title: "Total Reviews Submitted",
      value: 753,
      icon: <ReviewsIcon />,
      trend: { direction: "down", percentage: 23.5 },
      type: "link",
      path: "/admin/reviews",
    },
  ];
  return (
    <PageLayout
      title="Overview"
      rightNodes={
        <DropdownInput
          type="primary"
          options={[
            {
              label: "Weekly",
              value: "weekly",
            },
            {
              label: "Monthly",
              value: "monthly",
            },
            {
              label: "Yearly",
              value: "yearly",
            },
          ]}
          position="bottom-right"
        />
      }
      leftNodes={[
        <Button variant="secondary" key={"1"}>
          <ExportIcon /> <span>Export Data</span>
        </Button>,
        <Button variant="secondary" key={"2"}>
          <ClipBoardIcon /> <span>Create Report</span>
        </Button>,
      ]}
    >
      <section className={styles.overview}>
        <div className={styles.cards}>
          {overviewCards.map((card, index) => (
            <MetricCard key={index} {...card} />
          ))}
        </div>
      </section>
      <Charts />
      <RecentActivity />
    </PageLayout>
  );
}

export default Dashboard;
