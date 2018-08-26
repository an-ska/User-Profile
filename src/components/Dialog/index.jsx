import React from "react";
import styles from "./Dialog.scss";

const Dialog = ({ text, link, icon, handleClick }) => (
  <div className={styles.overlay}>
    <div className={styles.dialog}>
      <p className={styles.information}>{text}</p>
      <a
        href={link}
        className={styles.link}>
        {link}
      </a>
      <i
        className={`${styles.close} ${"far fa-lg"} ${icon}`}
        onClick={handleClick}>
      </i>
    </div>
  </div>
)

export default Dialog;
