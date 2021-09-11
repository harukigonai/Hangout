import React, { useState } from "react";
import styles from "../../styles/InputTemplate.module.css";

export default function InputTemplate({ label, placeholder, value, onChange }) {
  const [selected, setSelected] = useState(false);
  const [visited, setVisited] = useState(false);

  return (
    <div className={styles.inputDiv}>
      <label style={{ visibility: value || selected ? "visible" : "hidden" }}>
        {label}
      </label>
      <div>
        <input
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
          onChange={onChange}
          placeholder={selected ? "" : placeholder}
        />
        <p style={{ visibility: "hidden" }}>.</p>
      </div>
    </div>
  );
}
