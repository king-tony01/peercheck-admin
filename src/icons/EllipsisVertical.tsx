import * as React from "react";

const EllipsisVerticalIcon: React.FC<React.SVGProps<SVGElement>> = ({
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
      d="M10 3.25c-.619 0-1.125.506-1.125 1.125S9.381 5.5 10 5.5s1.125-.506 1.125-1.125S10.619 3.25 10 3.25m0 11.25c-.619 0-1.125.506-1.125 1.125S9.381 16.75 10 16.75s1.125-.506 1.125-1.125S10.619 14.5 10 14.5m0-5.625c-.619 0-1.125.506-1.125 1.125s.506 1.125 1.125 1.125 1.125-.506 1.125-1.125S10.619 8.875 10 8.875"
    ></path>
  </svg>
);

export default EllipsisVerticalIcon;
