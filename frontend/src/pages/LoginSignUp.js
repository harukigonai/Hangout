import React, { useState } from "react";
import styles from "../styles/LoginSignUp.module.css";

import Button from "../components/Button";

import Username from "../components/formFields/Username";
import Email from "../components/formFields/Email";
import Password from "../components/formFields/Password";
import ConfirmPassword from "../components/formFields/ConfirmPassword";
import classNames from "classnames";

export default function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
  };

  return (
    <div id={styles.outer}>
      <div
        id={styles.inner}
        className={classNames({ [styles.hidden]: !isLogin })}
      >
        <div id={styles.headerDiv}>
          <h1>Login</h1>
          <p>
            No account?
            <button onClick={handleClick}>Sign up</button>
          </p>
        </div>
        <form>
          <div className={styles.inputsDiv}>
            <Email value={email} onChange={(e) => setEmail(e.target.value)} />
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button text="Login" />
        </form>
      </div>
      <div
        id={styles.inner}
        className={classNames({ [styles.hidden]: isLogin })}
      >
        <div>
          <div id={styles.headerDiv}>
            <h1>Sign up</h1>
            <p>
              Have an account?
              <button onClick={handleClick}>Login</button>
            </p>
          </div>
          <form>
            <div className={styles.inputsDiv}>
              <Username
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Email value={email} onChange={(e) => setEmail(e.target.value)} />
              <Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ConfirmPassword
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button text="Sign up" />
          </form>
        </div>
      </div>
    </div>
  );
}
