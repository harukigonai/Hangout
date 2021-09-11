import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Hangout.module.css";
import Button from "../components/Button";
import classNames from "classnames";

import Canvas from "../components/Canvas";

export default function Hangout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const sidebarRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (sidebarOpen && !sidebarRef.current.contains(e.target)) {
        toggleSidebar();
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return (
    <div id={styles.hangout}>
      <div id={styles.hangoutPage}>
        <div id={styles.header}>
          <h1>Hangout</h1>
          <Button ref={buttonRef} text="Friends List" onClick={toggleSidebar} />
        </div>

        <Canvas />
      </div>

      <div
        ref={sidebarRef}
        className={classNames(styles.sidebar, {
          [styles.sidebarOpen]: sidebarOpen,
        })}
      >
        <h2>Friends List</h2>
      </div>
    </div>
  );
}
