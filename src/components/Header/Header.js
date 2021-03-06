import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

class Header extends React.PureComponent {
  render() {
    return (
      <header className={styles["header"]}>
        <Link className={styles["home-button"]} to="/" />
        <button className={styles["login-button"]}>
          <Link to="/login">Login</Link>
        </button>
      </header>
    );
  }
}

export default Header;
