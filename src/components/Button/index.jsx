import React from "react";
import styles from "./Button.scss";

const Button = ({ text, handleClick }) => (
  <button
    type="button"
    className={styles.button}
    onClick={handleClick}>
    <span className={styles.buttonContent}>{text}</span>
  </button>
)

export default Button;
