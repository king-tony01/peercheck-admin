import React from "react";
import styles from "./styles/Input.module.css";

function CheckBox({
  checked = false,
  onChange,
}: {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={styles.checkbox_wrapper}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.checkbox}></span>
    </div>
  );
}

export default CheckBox;
