import * as React from "react";

const ChevronDown: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#9f9f9f",
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
      d="m10 10.796 3.713-3.713 1.06 1.06-4.772 4.774-4.773-4.773 1.06-1.06z"
    ></path>
  </svg>
);

export default ChevronDown;
