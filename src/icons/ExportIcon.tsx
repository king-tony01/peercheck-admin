import * as React from "react";

const ExportIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#525866",
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
      d="M2.6 12.2h10.8v1.2H2.6zm6-7.903V11H7.4V4.297L3.757 7.94l-.848-.848L8 2l5.091 5.091-.848.848L8.6 4.298z"
    ></path>
  </svg>
);

export default ExportIcon;
