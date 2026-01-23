import * as React from "react";

const TableHeaderIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#2A2A2A",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill={color}
      d="M14.167 7.917 10 3.75 5.833 7.917zm0 4.166L10 16.25l-4.167-4.167z"
    ></path>
  </svg>
);

export default TableHeaderIcon;
