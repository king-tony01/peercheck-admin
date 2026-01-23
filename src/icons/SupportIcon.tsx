import * as React from "react";

const SupportIcon: React.FC<React.SVGProps<SVGElement>> = ({
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
      d="M17.954 9h.796a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-.797A6 6 0 0 1 12 20.25v-1.5a4.5 4.5 0 0 0 4.5-4.5v-4.5a4.5 4.5 0 1 0-9 0V15H5.25a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 5.25 9h.797a6 6 0 0 1 11.906 0M5.25 10.5v3H6v-3zm12.75 0v3h.75v-3zm-9.18 4.339.795-1.272A4.5 4.5 0 0 0 12 14.25a4.5 4.5 0 0 0 2.385-.683l.795 1.272a5.97 5.97 0 0 1-3.18.911 5.97 5.97 0 0 1-3.18-.911"
    ></path>
  </svg>
);

export default SupportIcon;
