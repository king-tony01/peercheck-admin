import React from "react";
import styles from "./styles/Button.module.css";
function Button({
  variant,
  size = "medium",
  disabled,
  children,
  onClick,
  overrideStyles,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles[variant as string]} ${styles[size]} ${
        disabled ? styles.disabled : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      {...props}
      style={overrideStyles}
    >
      {children}
    </button>
  );
}

export default Button;
