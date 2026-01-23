import * as React from "react";

const UserIcon: React.FC<React.SVGProps<SVGElement>> = ({
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
      d="M4 17.5a6 6 0 1 1 12 0h-1.5a4.5 4.5 0 1 0-9 0zm6-6.75a4.5 4.5 0 0 1-4.5-4.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5-2.014 4.5-4.5 4.5m0-1.5a3 3 0 1 0 0-6 3 3 0 1 0 0 6"
    ></path>
  </svg>
);

export default UserIcon;
