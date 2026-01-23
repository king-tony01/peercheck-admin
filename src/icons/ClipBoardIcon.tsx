import * as React from "react";

const ClipBoardIcon: React.FC<React.SVGProps<SVGElement>> = ({
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
      d="M11 2v1.2h1.804c.329 0 .596.267.596.596v9.608a.596.596 0 0 1-.596.596H3.196a.596.596 0 0 1-.596-.596V3.796c0-.329.267-.596.596-.596H5V2zM5 4.4H3.8v8.4h8.4V4.4H11v1.2H5zm1.2 6v1.2H5v-1.2zm0-1.8v1.2H5V8.6zm0-1.8V8H5V6.8zm3.6-3.6H6.2v1.2h3.6z"
    ></path>
  </svg>
);

export default ClipBoardIcon;
