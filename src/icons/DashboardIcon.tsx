import * as React from "react";

const DashboardIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "var(--active-color, #737373)",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M12.9 20.1v-9h7.2v9zm-9-7.2v-9h7.2v9zm5.4-1.8V5.7H5.7v5.4zm-5.4 9v-5.4h7.2v5.4zm1.8-1.8h3.6v-1.8H5.7zm9 0h3.6v-5.4h-3.6zM12.9 3.9h7.2v5.4h-7.2zm1.8 1.8v1.8h3.6V5.7z"
    ></path>
  </svg>
);

export default DashboardIcon;
