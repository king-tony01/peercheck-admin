import * as React from "react";

const UsersIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "#737373",
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
      d="M2 14a4.8 4.8 0 0 1 9.6 0h-1.2a3.6 3.6 0 1 0-7.2 0zm4.8-5.4A3.6 3.6 0 0 1 3.2 5c0-1.989 1.611-3.6 3.6-3.6s3.6 1.611 3.6 3.6-1.611 3.6-3.6 3.6m0-1.2a2.4 2.4 0 1 0 .001-4.799A2.4 2.4 0 0 0 6.8 7.4m4.97 2.222A4.8 4.8 0 0 1 14.6 14h-1.2a3.6 3.6 0 0 0-2.122-3.284zm-.412-6.774a3.3 3.3 0 0 1-.958 6.339V7.979a2.1 2.1 0 0 0 .625-3.965z"
    ></path>
  </svg>
);

export default UsersIcon;
