import React from "react";
import styles from "./Statistic.scss";

const Statistic = ({ value, label }) => (
  <li className={styles.statistic}>
    <span className={styles.value}>{value}</span>
    <span className={styles.label}>{label}</span>
  </li>
)

export default Statistic;
