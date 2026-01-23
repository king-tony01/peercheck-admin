import * as React from "react";

const SettingsIcon: React.FC<React.SVGProps<SVGElement>> = ({
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
      d="m9.017 4.8 2.347-2.346a.9.9 0 0 1 1.272 0L14.983 4.8H18.3a.9.9 0 0 1 .9.9v3.317l2.346 2.347a.9.9 0 0 1 0 1.272L19.2 14.983V18.3a.9.9 0 0 1-.9.9h-3.317l-2.347 2.346a.9.9 0 0 1-1.272 0L9.017 19.2H5.7a.9.9 0 0 1-.9-.9v-3.317l-2.346-2.347a.9.9 0 0 1 0-1.272L4.8 9.017V5.7a.9.9 0 0 1 .9-.9zM6.6 6.6v3.163L4.364 12 6.6 14.236V17.4h3.164L12 19.637l2.236-2.237H17.4v-3.163L19.637 12 17.4 9.763V6.6h-3.163L12 4.363 9.764 6.6zm5.4 9a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2m0-1.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
    ></path>
  </svg>
);

export default SettingsIcon;
