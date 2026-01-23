import * as React from "react";

const SearchIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#737373",
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
      d="M9.25 2.5A6.75 6.75 0 0 1 16 9.25 6.75 6.75 0 0 1 9.25 16 6.75 6.75 0 0 1 2.5 9.25 6.75 6.75 0 0 1 9.25 2.5m0 12c2.9 0 5.25-2.35 5.25-5.25S12.15 4 9.25 4A5.25 5.25 0 0 0 4 9.25c0 2.9 2.349 5.25 5.25 5.25m6.364.053 2.121 2.121-1.06 1.061-2.122-2.121z"
    ></path>
  </svg>
);

export default SearchIcon;
