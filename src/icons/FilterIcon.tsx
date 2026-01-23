import * as React from "react";

const FilterIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#525866",
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
      d="M8.5 14.5h3V13h-3zm-5.25-9V7h13.5V5.5zm2.25 5.25h9v-1.5h-9z"
    ></path>
  </svg>
);

export default FilterIcon;
