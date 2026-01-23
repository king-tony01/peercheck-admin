"use client";
import React from "react";
import styles from "./styles/Input.module.css";
import EllipsisVerticalIcon from "@/icons/EllipsisVertical";

function ActionDropdown({
  options,
  clickedChild,
  onChildClick,
  type,
  position = "top-right",
}: ActionDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [clicked, setClicked] = React.useState(clickedChild ?? options[0]);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionSelect = (option: DropdownOption) => {
    onChildClick && onChildClick(option);
    setIsOpen(false);
    setClicked(option);
  };
  return (
    <div
      onClick={toggleDropdown}
      className={`${styles.action_dropdown} ${styles[type]}`}
      data-type={type}
    >
      <EllipsisVerticalIcon />
      {isOpen && (
        <div
          className={styles.options}
          style={
            {
              "--top": position.includes("top") ? "100%" : "auto",
              "--bottom": position.includes("bottom") ? "100%" : "auto",
              "--left": position.includes("left") ? "0" : "auto",
              "--right": position.includes("right") ? "0" : "auto",
            } as React.CSSProperties
          }
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionSelect(option)}
              className={styles.option}
            >
              {option.icon}
              <span className={styles.option_label}>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActionDropdown;
