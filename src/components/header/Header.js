import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "./svg/logo.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
    </div>
  );
};

export default Header;
