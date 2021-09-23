import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Hangout.module.css";
import classNames from "classnames";

import Messaging from "../components/Messaging";
import Scrollbars from "react-custom-scrollbars";

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

  const [hideSidebar, setHideSidebar] = useState(true);
  const toggleHideSidebar = () => setHideSidebar(!hideSidebar);

  const conversation = (name, preview, lastMessageTime) => (
    <div className={styles.conversation}>
      <div className={styles.conversationProfilePic}></div>
      <div className={styles.conversationNameTimePreviewDiv}>
        <div className={styles.conversationNameTimeDiv}>
          <h3 className={styles.conversationName}>{name}</h3>
          <p className={styles.conversationTime}>{lastMessageTime}</p>
        </div>
        <div className={styles.conversationPreviewDiv}>
          <p className={styles.conversationPreview}>{preview}</p>
        </div>
      </div>
    </div>
  );

  const [messagingName, setMessagingName] = useState("Adam");

  return (
    <div id={styles.hangout}>
      <div
        className={classNames(styles.sidebar, {
          [styles.sidebarHidden]: hideSidebar,
        })}
      >
        <h2 id={styles.sidebarHeader}>Hangouts</h2>
        <div id={styles.scrollbarDiv}>
          <Scrollbars>
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            {conversation("Haruki", "Hangout webapp", "2 min ago")}
            <div id={styles.conversationListBottomDiv} />
          </Scrollbars>
        </div>
      </div>
      <div
        className={classNames(styles.content, {
          [styles.contentMax]: !hideSidebar,
        })}
      >
        <Messaging
          buttonRef={buttonRef}
          messagingName={messagingName}
          toggleHideSidebar={toggleHideSidebar}
        />
      </div>
    </div>
  );
}
