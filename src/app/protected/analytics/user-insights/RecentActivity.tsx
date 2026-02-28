"use client";
import SmartFilter from "@/components/Filter/SmartFilter";
import DropdownInput from "@/components/Input/DropdownInput";
import SearchInput from "@/components/Input/SearchInput";
import DynamicTable from "@/components/Tables/DynamicTable";
import FormatDate from "@/components/date/FormatDate";
import CompaniesIcon from "@/icons/CompaniesIcon";
import ReviewsIcon from "@/icons/ReviewsIcon";
import styles from "./styles/Dashboard.module.css";
import ActionDropdown from "@/components/Input/ActionDropdown";
import FormatStatus from "@/components/wrappers/FormatStatus";
import UserIcon from "@/icons/UserIcon";
import CheckBox from "@/components/Input/CheckBox";
import { useWindow } from "@/hooks/useWindow";
import MobileTable from "@/components/Tables/MobileTable";
import { FilterGroup } from "@/components/Filter/SmartFilter";
import { API_ROUTES } from "@/routes/apiRoutes";
import useFetch from "@/hooks/useFetch";
import Loader from "@/components/Loader/Loader";
import { useState, useEffect } from "react";

function RecentActivity() {
  const { width } = useWindow();
  const [searchValue, setSearchValue] = useState("");
  const [queryParams, setQueryParams] = useState<Record<string, string>>({
    search: "",
    activityType: "",
    period: "7_days",
  });

  // Debounce search input
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setQueryParams((prev) => ({
        ...prev,
        search: searchValue,
      }));
    }, 500); // 500ms delay

    return () => clearTimeout(debounceTimer);
  }, [searchValue]);
  const { data: recentActivity, isLoading: isRecentActivityLoading } = useFetch<
    RecentActivtyData[]
  >(API_ROUTES.DASHBOARD_RECENT_ACTIVITY(queryParams), {
    onError: (error) => {
      console.error("Dashboard recent activity error:", error);
    },
  });

  const filterData: FilterGroup[] = [
    {
      title: "Activity Type",
      options: [
        { label: "Review", value: "review" },
        { label: "User", value: "user" },
        { label: "Company", value: "company" },
      ],
      type: "checkbox",
    },
  ];
  const getActivityIcon = (type: string) => {
    if (typeof type !== "string") {
      return null;
    }
    if (type.toLowerCase().includes("review")) {
      return <ReviewsIcon />;
    }

    switch (type) {
      case "User":
        return <UserIcon />;
      case "Company":
        return <CompaniesIcon />;
      default:
        return null;
    }
  };

  const DEFAULT_COLUMNS: TableColumn[] = [
    {
      key: "checkbox",
      //   headerClassName: styles.checkbox_cell,
      //   className: styles.checkbox_cell,
      renderHeader: ({ selectedRows, currentData, toggleAllRows }) => (
        <CheckBox
          checked={
            selectedRows.size === currentData.length && currentData.length > 0
          }
          onChange={toggleAllRows}
        />
      ),
      render: (row, { selectedRows, toggleRowSelection }) => {
        if (row.isSkeleton) {
          return <Loader variant="skeleton" size="sm" />;
        }
        return (
          <CheckBox
            checked={selectedRows.has(row.id)}
            onChange={() => toggleRowSelection(row.id)}
          />
        );
      },
    },
    {
      key: "description",
      label: "Description",
      sortable: true,
      className: styles.description_cell,
    },
    {
      key: "logName",
      label: "Activity Type",
      sortable: true,
      render: (row) => (
        <div className={styles.activity_type}>
          <div className={styles.activity_icon}>
            {getActivityIcon(row.logName)}
          </div>
          <span>{row.logName}</span>
        </div>
      ),
    },
    {
      key: "date",
      label: "Date",
      sortable: true,
      render: (row) => {
        if (row.isSkeleton) {
          return <Loader variant="skeleton" size="sm" />;
        }
        return <FormatDate date={row.created_at} options={{ short: false }} />;
      },
    },
    // {
    //   key: "status",
    //   label: "Status",
    //   sortable: true,
    //   render: (row) => <FormatStatus status={row.status} />,
    // },
    {
      key: "actions",
      headerClassName: styles.actions_cell,
      className: styles.actions_cell,
      renderHeader: () => null,
      render: (row) => {
        if (row.isSkeleton) {
          return <Loader variant="skeleton" size="sm" />;
        }
        return (
          <ActionDropdown
            type="primary"
            options={[
              {
                label: "View Details",
                value: "view_details",
              },
              {
                label: "Edit Activity",
                value: "edit_activity",
              },
            ]}
          />
        );
      },
    },
  ];

  // Generate skeleton rows for loading state
  const skeletonRows = Array.from({ length: 5 }).map((_, index) => ({
    id: `skeleton-${index}`,
    isSkeleton: true,
    description: <Loader variant="skeleton" size="sm" />,
    logName: "Loading...",
    created_at: new Date().toISOString(),
  }));

  const tableData = isRecentActivityLoading
    ? skeletonRows
    : (recentActivity ?? []);

  return (
    <section className={styles.recent_activity}>
      <div className={styles.header}>
        <h2>RECENT ACTIVITY</h2>
        <div className={styles.controls}>
          <SearchInput
            placeholder="Search..."
            onChange={(value) => setSearchValue(value)}
          />
          <SmartFilter
            filterData={filterData}
            onFilterChange={(filters) => {
              const activityTypes = filters["Activity Type"] || [];
              setQueryParams((prev) => ({
                ...prev,
                activityType: Array.isArray(activityTypes)
                  ? activityTypes.join(",")
                  : "",
              }));
            }}
          />
          <DropdownInput
            type="secondary"
            options={[
              {
                label: "Last 7 days",
                value: "7_days",
              },
              {
                label: "Last 30 days",
                value: "30_days",
              },
            ]}
            position="bottom-right"
            onSelect={(option) =>
              setQueryParams((prev) => ({
                ...prev,
                period: option.value,
              }))
            }
          />
        </div>
      </div>
      {width <= 768 ? (
        <MobileTable
          headerTitle="Description"
          showCheckbox={true}
          emptyTitle="No recent activity"
          emptyMessage="Activity will appear here as it happens"
          data={(isRecentActivityLoading
            ? skeletonRows
            : (recentActivity ?? [])
          ).map((row) => ({
            id: row.id,
            content: (
              <div className={styles.mobile_activity_item}>
                <div className={styles.first_row}>
                  <p>{row.description}</p>
                  <ActionDropdown
                    type="primary"
                    options={[
                      {
                        label: "View Details",
                        value: "view_details",
                      },
                      {
                        label: "Edit Activity",
                        value: "edit_activity",
                      },
                    ]}
                  />
                </div>
                <div className={styles.second_row}>
                  <FormatDate
                    date={row.created_at}
                    options={{ short: false }}
                  />
                  {/* <FormatStatus status={row.status} /> */}
                </div>
              </div>
            ),
          }))}
        />
      ) : (
        <DynamicTable
          columns={DEFAULT_COLUMNS}
          data={isRecentActivityLoading ? skeletonRows : (recentActivity ?? [])}
          emptyTitle="No recent activity"
          emptyMessage="Activity will appear here as it happens"
        />
      )}
    </section>
  );
}

export default RecentActivity;
