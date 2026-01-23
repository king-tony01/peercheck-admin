import * as React from "react";

const InstitutionsIcon: React.FC<React.SVGProps<SVGElement>> = ({
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
      d="m12 3.44 4.5 4.5v1.81h3v7.5h.75v1.5H3.75v-1.5h.75v-7.5h3V7.94zm4.5 13.81H18v-6h-1.5zm-9-6H6v6h1.5zM9 8.56v8.69h2.25V12h1.5v5.25H15V8.56l-3-3z"
    ></path>
  </svg>
);

export default InstitutionsIcon;
