import React, { useState } from "react";
import styles from "../styles/Hangout.module.css";
import Button from "../components/Button";
import classNames from "classnames";
import { ReactComponent as Birb } from "../vectors/birb.svg";

export default function Messaging({
  messagingName,
  buttonRef,
  toggleHideSidebar,
}) {
  const [message, setMessage] = useState("");
  const updateMessage = (e) => setMessage(e.target.value);
  const [inputSelected, setInputSelected] = useState(false);
  const toggleInputSelected = () => setInputSelected(!inputSelected);

  console.log(message);

  return (
    <>
      <div id={styles.messagingDiv}>
        <div id={styles.messagingHeaderDiv}>
          <h2>{messagingName}</h2>
          <Button
            ref={buttonRef}
            text="Conversations"
            onClick={toggleHideSidebar}
          />
        </div>
        <div id={styles.messages}></div>
        <div id={styles.messageInputDiv}>
          <div id={styles.messageInputSubDiv}>
            <input
              placeholder={inputSelected ? "" : "Message"}
              id={styles.messageInput}
              onChange={updateMessage}
              onFocus={toggleInputSelected}
              onBlur={toggleInputSelected}
            />
            <div
              id={styles.birbDiv}
              style={{ cursor: message ? "pointer" : "unset" }}
            >
              <Birb
                className={classNames(styles.birb, {
                  [styles.birbPending]: !message,
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
