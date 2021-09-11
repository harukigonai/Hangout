import React from "react";
import styles from "../styles/Hangout.module.css";

export default function Hangout() {
  return (
    <div id={styles.hangout}>
      <div id={styles.hangoutPage}>
        <h1>Hangout</h1>
        <p>Hello!</p>
      </div>

      <div id={styles.sidebar}></div>
    </div>
  );
}
