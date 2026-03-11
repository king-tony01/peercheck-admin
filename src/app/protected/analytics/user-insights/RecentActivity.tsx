"use client";
import SmartFilter from "@/components/Filter/SmartFilter";
import DropdownInput from "@/components/Input/DropdownInput";
import SearchInput from "@/components/Input/SearchInput";
import DynamicTable from "@/components/Tables/DynamicTable";
import FormatDate from "@/components/date/FormatDate";
import CompaniesIcon from "@/icons/CompaniesIcon";
import ReviewsIcon from "@/icons/ReviewsIcon";
import styles from "../../dashboard/styles/Dashboard.module.css";
import ActionDropdown from "@/components/Input/ActionDropdown";
import UserIcon from "@/icons/UserIcon";
import CheckBox from "@/components/Input/CheckBox";
import { useWindow } from "@/hooks/useWindow";
import MobileTable from "@/components/Tables/MobileTable";
import { FilterGroup } from "@/components/Filter/SmartFilter";
import { API_ROUTES } from "@/routes/apiRoutes";
import useFetch from "@/hooks/useFetch";
import Loader from "@/components/Loader/Loader";
import { useState, useEffect } from "react";

const formatDateForQuery = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const buildDateRangeValue = (daysBack: number) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - daysBack);

  return `${formatDateForQuery(startDate)}-${formatDateForQuery(endDate)}`;
};

function RecentActivity() {
  const { width } = useWindow();
  const [searchValue, setSearchValue] = useState("");
  const defaultRangeValue = buildDateRangeValue(7);
  const [queryParams, setQueryParams] = useState<Record<string, string>>({
    search: "",
    activityType: "",
    startDate: defaultRangeValue.slice(0, 10),
    endDate: defaultRangeValue.slice(11),
    page: "1",
    per_page: "5",
    limit: "5",
  });

  // Debounce search input
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setQueryParams((prev) => ({
        ...prev,
        search: searchValue,
        page: "1",
      }));
    }, 500); // 500ms delay

    return () => clearTimeout(debounceTimer);
  }, [searchValue]);

  const { data: recentActivityResponse, isLoading: isRecentActivityLoading } =
    useFetch<PaginatedApiSuccessResponse<RecentActivtyData[]>>(
      API_ROUTES.DASHBOARD_RECENT_ACTIVITY(queryParams),
      {
        parser: async (res) => res.json(),
        onError: (error) => {
          console.error("Dashboard recent activity error:", error);
        },
      },
    );

  const recentActivity = recentActivityResponse?.data ?? [];
  const paginationMeta = recentActivityResponse?.meta;
  const currentPage =
    paginationMeta?.current_page || Number(queryParams.page || "1") || 1;
  const perPage =
    paginationMeta?.per_page ||
    Number(queryParams.per_page || queryParams.limit || "5") ||
    5;
  const totalPages = paginationMeta?.last_page || 1;

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
    // {
    //   key: "checkbox",
    //   //   headerClassName: styles.checkbox_cell,
    //   //   className: styles.checkbox_cell,
    //   renderHeader: ({ selectedRows, currentData, toggleAllRows }) => (
    //     <CheckBox
    //       checked={
    //         selectedRows.size === currentData.length && currentData.length > 0
    //       }
    //       onChange={toggleAllRows}
    //     />
    //   ),
    //   render: (row, { selectedRows, toggleRowSelection }) => {
    //     if (row.isSkeleton) {
    //       return <Loader variant="skeleton" size="sm" />;
    //     }
    //     return (
    //       <CheckBox
    //         checked={selectedRows.has(row.id)}
    //         onChange={() => toggleRowSelection(row.id)}
    //       />
    //     );
    //   },
    // },
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
      key: "created_at",
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
                page: "1",
              }));
            }}
          />
          <DropdownInput
            type="secondary"
            options={[
              {
                label: "Last 7 days",
                value: buildDateRangeValue(7),
              },
              {
                label: "Last 30 days",
                value: buildDateRangeValue(30),
              },
            ]}
            position="bottom-right"
            onSelect={(option) => {
              const startDate = option.value.slice(0, 10);
              const endDate = option.value.slice(11);

              setQueryParams((prev) => ({
                ...prev,
                startDate,
                endDate,
                page: "1",
              }));
            }}
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
          serverPagination
          currentPage={currentPage}
          perPage={perPage}
          totalPages={totalPages}
          totalItems={paginationMeta?.total}
          onPageChange={(nextPage) =>
            setQueryParams((prev) => ({
              ...prev,
              page: String(nextPage),
            }))
          }
          onPerPageChange={(nextPerPage) =>
            setQueryParams((prev) => ({
              ...prev,
              page: "1",
              per_page: String(nextPerPage),
              limit: String(nextPerPage),
            }))
          }
          emptyTitle="No recent activity"
          emptyMessage="Activity will appear here as it happens"
        />
      )}
    </section>
  );
}

export default RecentActivity;
