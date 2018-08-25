import React from "react";
import styles from "./Button.scss";

const Button = ({ text, handleClick }) => (
  <button
    type="button"
    className={styles.button}
    onClick={handleClick}>
    {text}
  </button>
)

export default Button;
