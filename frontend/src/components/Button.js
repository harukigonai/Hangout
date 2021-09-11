import React from "react";
import styles from "../styles/Button.module.css";

export default function Button({ text, onClick, ref }) {
  return (
    <button ref={ref} className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
