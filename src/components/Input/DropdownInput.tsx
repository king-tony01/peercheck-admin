"use client";
import ChevronDown from "@/icons/ChevronDown";
import React from "react";
import styles from "./styles/Input.module.css";

function DropdownInput({
  options,
  selectedOption,
  onSelect,
  type,
  position = "bottom-left",
}: DropdownInputProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(selectedOption ?? options[0]);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionSelect = (option: DropdownOption) => {
    onSelect && onSelect(option);
    setIsOpen(false);
    setSelected(option);
  };
  return (
    <div
      onClick={toggleDropdown}
      className={`${styles.dropdown_input} ${styles[type]}`}
      data-type={type}
    >
      <span className={styles.selected}>{selected.label}</span>
      <ChevronDown />
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

export default DropdownInput;
