import * as React from "react";

const CompaniesIcon: React.FC<React.SVGProps<SVGElement>> = ({
  color = "var(--active-color, #737373)",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <mask
      id="mask0_1_20594"
      width="24"
      height="24"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z"></path>
    </mask>
    <g mask="url(#mask0_1_20594)">
      <path
        fill={color}
        d="M2.366 20.577v-17.5h9.5v4h9.769v13.5zm1.5-1.5h6.5v-2.5h-6.5zm0-4h6.5v-2.5h-6.5zm0-4h6.5v-2.5h-6.5zm0-4h6.5v-2.5h-6.5zm8 12h8.269v-10.5h-8.27zm2.192-6.5v-1.5h3.692v1.5zm0 4v-1.5h3.692v1.5z"
      ></path>
    </g>
  </svg>
);

export default CompaniesIcon;
