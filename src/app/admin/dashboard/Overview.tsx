import OverviewCard from "./components/OverviewCard";
import CompaniesIcon from "@/icons/CompaniesIcon";
import InstitutionsIcon from "@/icons/InstitutionsIcon";
import ReviewsIcon from "@/icons/ReviewsIcon";
import UsersIcon from "@/icons/UsersIcon";
import styles from "./styles/Dashboard.module.css";
import DropdownInput from "@/components/Input/DropdownInput";
import Button from "@/components/Button/Button";
import ExportIcon from "@/icons/ExportIcon";
import ClipBoardIcon from "@/icons/ClipBoardIcon";

function Overview() {
  const overviewCards: OverviewCard[] = [
    {
      title: "All Companies",
      value: 36681,
      icon: <CompaniesIcon />,
      chip: { label: "+312", color: "green" },
    },
    {
      title: "All Institutions",
      value: 1214,
      icon: <InstitutionsIcon />,
      chip: { label: "+312", color: "green" },
    },
    {
      title: "Total Users",
      value: 124580,
      icon: <UsersIcon />,
      trend: { direction: "down", percentage: 13.5 },
    },
    {
      title: "Total Reviews Submitted",
      value: 753,
      icon: <ReviewsIcon />,
      trend: { direction: "down", percentage: 23.5 },
    },
  ];
  return (
    <section className={styles.overview}>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <h4>Overview</h4>
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
            position="top-right"
          />
        </div>
        <div className={styles.header_right}>
          <Button variant="secondary">
            <ExportIcon /> <span>Export Data</span>
          </Button>
          <Button variant="secondary">
            <ClipBoardIcon /> <span>Create Report</span>
          </Button>
        </div>
      </div>
      <div className={styles.cards}>
        {overviewCards.map((card, index) => (
          <OverviewCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Overview;
