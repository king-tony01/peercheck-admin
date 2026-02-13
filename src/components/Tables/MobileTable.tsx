"use client";

import { useState } from "react";
import CheckBox from "../Input/CheckBox";
import styles from "./styles/Table.module.css";

interface MobileTableRow {
  id: string;
  content: string | React.ReactNode;
}

interface MobileTableProps {
  headerTitle: string;
  data: MobileTableRow[];
  showCheckbox?: boolean;
  itemsPerPage?: number;
}

function MobileTable({
  headerTitle,
  data,
  showCheckbox = false,
  itemsPerPage = 7,
}: MobileTableProps) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const toggleRowSelection = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAllRows = () => {
    if (selectedRows.size === currentData.length && currentData.length > 0) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentData.map((row) => row.id)));
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;

    if (totalPages <= maxVisibleButtons + 2) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            className={`${styles.page_button} ${i === currentPage ? styles.active : ""}`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>,
        );
      }
    } else {
      buttons.push(
        <button
          key={1}
          className={`${styles.page_button} ${1 === currentPage ? styles.active : ""}`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>,
      );

      if (currentPage > 3) {
        buttons.push(
          <span key="ellipsis1" className={styles.page_ellipsis}>
            ...
          </span>,
        );
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        buttons.push(
          <button
            key={i}
            className={`${styles.page_button} ${i === currentPage ? styles.active : ""}`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>,
        );
      }

      if (currentPage < totalPages - 2) {
        buttons.push(
          <span key="ellipsis2" className={styles.page_ellipsis}>
            ...
          </span>,
        );
      }

      buttons.push(
        <button
          key={totalPages}
          className={`${styles.page_button} ${totalPages === currentPage ? styles.active : ""}`}
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </button>,
      );
    }

    return buttons;
  };

  return (
    <div className={styles.mobile_table}>
      <div className={styles.mobile_header}>
        {showCheckbox && (
          <CheckBox
            checked={
              selectedRows.size === currentData.length && currentData.length > 0
            }
            onChange={toggleAllRows}
          />
        )}
        <span className={styles.mobile_header_title}>{headerTitle}</span>
      </div>
      <div className={styles.mobile_body}>
        {data.length === 0 ? (
          <div className={styles.empty_state}>
            <div className={styles.empty_state_icon}>
              <span className={styles.empty_state_dot} />
            </div>
            <div className={styles.empty_state_title}>No records yet</div>
            <div className={styles.empty_state_text}>
              New activity will appear here as it happens.
            </div>
          </div>
        ) : (
          currentData.map((row) => (
            <div key={row.id} className={styles.mobile_row}>
              {showCheckbox && (
                <CheckBox
                  checked={selectedRows.has(row.id)}
                  onChange={() => toggleRowSelection(row.id)}
                />
              )}
              <div className={styles.mobile_row_content}>{row.content}</div>
            </div>
          ))
        )}
      </div>

      {data.length > 0 && (
        <div className={styles.pagination}>
          <div className={styles.pagination_controls}>
            <button
              className={styles.page_button}
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              «
            </button>
            <button
              className={styles.page_button}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            {renderPaginationButtons()}
            <button
              className={styles.page_button}
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              ›
            </button>
            <button
              className={styles.page_button}
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileTable;
