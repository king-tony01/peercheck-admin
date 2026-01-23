import * as React from "react";

const ChevronRight: React.FC<React.SVGProps<SVGElement>> = ({
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
      d="M10.796 10 7.083 6.286l1.06-1.06 4.774 4.772-4.773 4.773-1.06-1.06z"
    ></path>
  </svg>
);

export default ChevronRight;
