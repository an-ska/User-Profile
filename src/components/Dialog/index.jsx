import React from "react";
import styles from "./Dialog.scss";

const Dialog = ({ text, link, icon, handleClick }) => (
  <div className={styles.overlay}>
    <div className={styles.dialog}>
      <i
        className={`${styles.close} ${"far fa-lg"} ${icon}`}
        onClick={handleClick}>
      </i>
      <span>dialog</span>
      <span>{link}</span>
    </div>
  </div>
)

export default Dialog;
