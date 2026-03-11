"use client";
import SmartFilter from "@/components/Filter/SmartFilter";
import DropdownInput from "@/components/Input/DropdownInput";
import SearchInput from "@/components/Input/SearchInput";
import DynamicTable from "@/components/Tables/DynamicTable";
import styles from "./styles/CompanInsights.module.css";
import useFetch from "@/hooks/useFetch";
import { API_ROUTES } from "@/routes/apiRoutes";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

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

function CompanyProfileTraffic() {
  const [searchValue, setSearchValue] = useState("");
  const defaultRangeValue = buildDateRangeValue(7);
  const [queryParams, setQueryParams] = useState<Record<string, string>>({
    startDate: defaultRangeValue.slice(0, 10),
    endDate: defaultRangeValue.slice(11),
    page: "1",
    per_page: "7",
    limit: "7",
    search: "",
  });

  const currentPage = Number(queryParams.page || "1") || 1;
  const perPage = Number(queryParams.per_page || queryParams.limit || "7") || 7;

  const {
    data: companyProfileTrafficResponse,
    isLoading: isCompanyProfileTrafficLoading,
  } = useFetch<CompanyProfileTraffic>(
    `${API_ROUTES.ANALYTICS_COMPANY_PROFILE_TRAFFIC}?${new URLSearchParams(queryParams).toString()}`,
    {
      onError: (error) => {
        console.error("Company profile traffic error:", error);
      },
    },
  );

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setQueryParams((prev) => ({
        ...prev,
        search: searchValue,
        page: "1",
      }));
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchValue]);

  const normalizedItems = (
    Array.isArray(companyProfileTrafficResponse)
      ? companyProfileTrafficResponse
      : Array.isArray((companyProfileTrafficResponse as any)?.items)
        ? (companyProfileTrafficResponse as any).items
        : Array.isArray((companyProfileTrafficResponse as any)?.data)
          ? (companyProfileTrafficResponse as any).data
          : []
  ) as any[];

  const trafficData: TableRow[] = normalizedItems.map((item, index) => ({
    id: String(item.companyId ?? item.company_id ?? index),
    company: item.company ?? item.company_name ?? "--",
    industry: item.industry ?? "--",
    totalVisits: item.totalVisits ?? item.total_visits ?? 0,
    totalReviews: item.totalReviews ?? item.total_reviews ?? 0,
    avgDurationPerSession: item.avgDurationPerSession ?? "--",
  }));

  const rawPagination = (companyProfileTrafficResponse as any)?.pagination;
  const pagination = rawPagination
    ? {
        currentPage:
          rawPagination.currentPage ??
          rawPagination.current_page ??
          currentPage,
        perPage: rawPagination.perPage ?? rawPagination.per_page ?? perPage,
        total: rawPagination.total ?? trafficData.length,
        lastPage: rawPagination.lastPage ?? rawPagination.last_page ?? 1,
      }
    : undefined;

  const DEFAULT_COLUMNS: TableColumn[] = [
    {
      key: "company",
      label: "Company",
      sortable: true,
      className: styles.description_cell,
      render: (row) => {
        if (row.isSkeleton) {
          return <Loader variant="skeleton" size="sm" />;
        }

        return <span>{row.company}</span>;
      },
    },
    {
      key: "industry",
      label: "Industry",
      sortable: true,
      render: (row) => {
        if (row.isSkeleton) {
          return <Loader variant="skeleton" size="sm" />;
        }

        return row.industry;
      },
    },
    {
      key: "totalVisits",
      label: "Total Visits",
      sortable: true,
      render: (row) => {
        if (row.isSkeleton) {
          return <Loader variant="skeleton" size="sm" />;
        }

        return row.totalVisits;
      },
    },
    {
      key: "totalReviews",
      label: "Total Reviews",
      sortable: true,
      render: (row) => {
        if (row.isSkeleton) {
          return <Loader variant="skeleton" size="sm" />;
        }

        return row.totalReviews;
      },
    },
    // {
    //   key: "avgDurationPerSession",
    //   label: "Avg Duration/Session",
    //   headerClassName: styles.actions_cell,
    //   className: styles.actions_cell,
    // },
  ];

  const skeletonRows: TableRow[] = Array.from({ length: 5 }).map(
    (_, index) => ({
      id: `skeleton-${index}`,
      isSkeleton: true,
      company: "Loading...",
      industry: "Loading...",
      totalVisits: 0,
      totalReviews: 0,
    }),
  );

  return (
    <section className={styles.company_profile_traffic}>
      <div className={styles.header}>
        <h2>company profile traffic</h2>
        <div className={styles.controls}>
          <SearchInput
            placeholder="Search..."
            onChange={(value) => setSearchValue(value)}
          />
          {/* <SmartFilter
            onFilterChange={(filters) => {
              console.log("Applied Filters:", filters);
            }}
          /> */}
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
      <DynamicTable
        columns={DEFAULT_COLUMNS}
        data={isCompanyProfileTrafficLoading ? skeletonRows : trafficData}
        serverPagination
        currentPage={pagination?.currentPage ?? currentPage}
        perPage={pagination?.perPage ?? perPage}
        totalPages={pagination?.lastPage ?? 1}
        totalItems={pagination?.total ?? trafficData.length}
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
        emptyTitle="No profile traffic data"
        emptyMessage="Company profile traffic data will appear here"
      />
    </section>
  );
}

export default CompanyProfileTraffic;
