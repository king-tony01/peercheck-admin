import * as React from "react";

const PendingIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#F27B2C",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill={color}
      d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12m.6-6V5H7.4v4.2H11V8z"
    ></path>
  </svg>
);

export default PendingIcon;
