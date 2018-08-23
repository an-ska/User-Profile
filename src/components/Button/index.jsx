import React from "react";
import styles from "./Button.scss";

const Button = ({ text }) => (
  <button
    type="button"
    onClick="handleClick will be here"
    className={styles.button}>
    {text}
  </button>
)

export default Button;
