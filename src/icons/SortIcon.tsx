import * as React from "react";

const SortIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#868C98",
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
      d="M16 4v9h2.25l-3 3.75-3-3.75h2.25V4zm-6 10.5V16H3.25v-1.5zm1.5-5.25v1.5H3.25v-1.5zm0-5.25v1.5H3.25V4z"
    ></path>
  </svg>
);

export default SortIcon;
