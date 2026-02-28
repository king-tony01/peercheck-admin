"use client";

import FilterIcon from "@/icons/FilterIcon";
import { useState, useRef, useEffect } from "react";
import CheckBox from "@/components/Input/CheckBox";
import styles from "./styles/SmartFilter.module.css";

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  title: string;
  options: FilterOption[];
  type: "checkbox" | "radio" | "date";
}

interface FilterState {
  [key: string]: string | string[] | null;
}

function SmartFilter({
  filterData = [],
  onFilterChange,
}: {
  filterData?: FilterGroup[];
  onFilterChange?: (filters: FilterState) => void;
}) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(
    (filterData || []).reduce(
      (acc, group) => ({
        ...acc,
        [group.title]: group.type === "checkbox" ? [] : null,
      }),
      {},
    ),
  );
  const panelRef = useRef<HTMLDivElement>(null);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleFilterChange = (
    groupTitle: string,
    value: string,
    type: "checkbox" | "radio" | "date",
  ) => {
    setFilters((prev) => {
      if (type === "checkbox") {
        const currentValues = Array.isArray(prev[groupTitle])
          ? (prev[groupTitle] as string[])
          : [];
        const updated = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];
        return { ...prev, [groupTitle]: updated };
      } else if (type === "radio") {
        return { ...prev, [groupTitle]: value };
      } else if (type === "date") {
        return { ...prev, [groupTitle]: value };
      }
      return prev;
    });
  };

  const handleApply = () => {
    onFilterChange?.(filters);
    setOpen(false);
  };

  const handleClear = () => {
    const clearedFilters: FilterState = filterData.reduce(
      (acc, group) => ({
        ...acc,
        [group.title]: group.type === "checkbox" ? [] : null,
      }),
      {},
    );
    setFilters(clearedFilters);
    onFilterChange?.(clearedFilters);
  };

  const activeFilterCount = Object.values(filters).reduce((count, value) => {
    if (Array.isArray(value)) {
      return count + value.length;
    }
    return count + (value !== null ? 1 : 0);
  }, 0);

  return (
    <section className={styles.filter_container} ref={panelRef}>
      <button className={styles.filter_button} onClick={() => setOpen(!open)}>
        <FilterIcon />

        {activeFilterCount > 0 && <span>({activeFilterCount})</span>}
      </button>

      {open && (
        <div className={styles.filter_panel}>
          {(filterData || []).map((group) => (
            <div key={group.title} className={styles.filter_section}>
              <h4 className={styles.filter_section_title}>{group.title}</h4>
              <div className={styles.filter_options}>
                {group.type === "checkbox" && (
                  <>
                    {group.options.map((option) => (
                      <div
                        key={option.value}
                        className={styles.filter_checkbox}
                      >
                        <CheckBox
                          checked={
                            Array.isArray(filters[group.title])
                              ? (filters[group.title] as string[]).includes(
                                  option.value,
                                )
                              : false
                          }
                          onChange={() =>
                            handleFilterChange(
                              group.title,
                              option.value,
                              "checkbox",
                            )
                          }
                        />
                        <label className={styles.filter_label}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </>
                )}

                {group.type === "radio" && (
                  <>
                    {group.options.map((option) => (
                      <div key={option.value} className={styles.filter_radio}>
                        <input
                          type="radio"
                          id={`filter-${group.title}-${option.value}`}
                          name={`filter-${group.title}`}
                          value={option.value}
                          checked={filters[group.title] === option.value}
                          onChange={() =>
                            handleFilterChange(
                              group.title,
                              option.value,
                              "radio",
                            )
                          }
                        />
                        <label
                          htmlFor={`filter-${group.title}-${option.value}`}
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </>
                )}

                {group.type === "date" && (
                  <input
                    type="date"
                    id={`filter-${group.title}`}
                    value={
                      typeof filters[group.title] === "string"
                        ? (filters[group.title] as string)
                        : ""
                    }
                    onChange={(e) =>
                      handleFilterChange(group.title, e.target.value, "date")
                    }
                  />
                )}
              </div>
            </div>
          ))}

          <div className={styles.filter_actions}>
            <button
              className={styles.filter_button_apply}
              onClick={handleApply}
            >
              Apply
            </button>
            <button
              className={styles.filter_button_clear}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default SmartFilter;
