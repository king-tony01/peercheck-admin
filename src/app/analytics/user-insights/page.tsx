import Button from "@/components/Button/Button";
import DropdownInput from "@/components/Input/DropdownInput";
import ClipBoardIcon from "@/icons/ClipBoardIcon";
import ExportIcon from "@/icons/ExportIcon";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import React from "react";
import RecentActivity from "./RecentActivity";
import UsersIcon from "@/icons/UsersIcon";
import ReviewsIcon from "@/icons/ReviewsIcon";
import styles from "./styles/UserInsights.module.css";
import MetricCard from "@/components/Cards/MetricCard";
import CustomBarChart from "@/components/Charts/BarChart";
import ListChart from "@/components/Charts/ListChart";
import CustomPieChart from "@/components/Charts/CustomPieChart";

function UserInsights() {
  const overviewCards: MetricCard[] = [
    {
      title: "Total Users",
      value: 36681,
      icon: <UsersIcon />,
      chip: { label: "+312", color: "green" },
      type: "more",
      options: [
        {
          label: "Explore",
          value: "explore",
        },
      ],
    },
    {
      title: "New Users",
      value: 1214,
      icon: <UsersIcon />,
      chip: { label: "+312", color: "green" },
      type: "more",
      options: [],
    },
    {
      title: "Avg Session Duration",
      value: 124580,
      icon: <UsersIcon />,
      trend: { direction: "down", percentage: 13.5 },
      type: "more",
      options: [],
    },
    {
      title: "Top City",
      value: "Lagos, NG",
      icon: <ReviewsIcon />,
      type: "more",
      options: [],
    },
  ];

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
    { category: "Salary", value: 4200, color: "#E5EBF0" },
    { category: "Institutions", value: 3100, color: "#E5EBF0" },
    { category: "Culture", value: 6200, color: "#E5EBF0" },
    { category: "Interview", value: 200, color: "#E5EBF0" },
    { category: "Interview", value: 2400, color: "#E5EBF0" },
    { category: "Interview", value: 3000, color: "#E5EBF0" },
    { category: "Interview", value: 4400, color: "#E5EBF0" },
    { category: "Interview", value: 9400, color: "#E5EBF0" },
    { category: "Interview", value: 10400, color: "#E5EBF0" },
    { category: "Interview", value: 12400, color: "#E5EBF0" },
    { category: "Interview", value: 2400, color: "#E5EBF0" },
    { category: "Interview", value: 5400, color: "#E5EBF0" },
  ];

  const topCities = [
    { label: "Lagos", value: 1234567 },
    { label: "Capetown", value: 234567 },
    { label: "Nairobi", value: 345678 },
    { label: "Addis Ababa", value: 456789 },
    { label: "Port-Harcourt", value: 567890 },
    { label: "Abuja", value: 678901 },
    { label: "Accra", value: 34567 },
    { label: "Pretoria", value: 789012 },
    { label: "Cairo", value: 890123 },
    { label: "Abidjan", value: 901234 },
  ];

  const topRolesData = [
    { name: "Software Engineer", value: 54071, color: "#FFA726" },
    { name: "Data Analyst", value: 32210, color: "#4FC3F7" },
    { name: "Cybersecurity Analyst", value: 24410, color: "#BA68C8" },
    { name: "Product Designer", value: 15250, color: "#E91E63" },
    { name: "Customer Success Manager", value: 11500, color: "#66BB6A" },
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
      <div>
        <section className={styles.overview}>
          <div className={styles.cards}>
            {overviewCards.map((card, index) => (
              <MetricCard key={index} {...card} />
            ))}
          </div>
        </section>
        <section className={styles.charts}>
          <div className={styles.chart}>
            <CustomBarChart
              title="User growth"
              subtitle="User Acquisition Overview"
              data={reviewCategoryData}
              showCartesian
              showYAxis
            />
          </div>
          <div className={styles.chart}>
            <ListChart
              title="Total Reviews"
              subtitle="By categories"
              data={topCities}
            />
          </div>
        </section>
        <section className={styles.pie_charts}>
          <div className={styles.pie}>
            <CustomPieChart
              title="TOP ROLES"
              subtitle="By user distribution"
              data={topRolesData}
            />
          </div>
          <span className={styles.line}></span>
          <div className={styles.pie}>
            <CustomPieChart
              title="Top industries"
              subtitle="By user distribution"
              data={topRolesData}
            />
          </div>
        </section>
        <RecentActivity />
      </div>
    </PageLayout>
  );
}

export default UserInsights;
