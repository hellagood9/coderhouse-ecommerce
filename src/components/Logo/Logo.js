import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LogoStarbucks } from "../../assets/img/starbucks-logo.svg";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles["logo"]}>
      <Link to="/" className={styles["logo__wrapper"]}>
        <LogoStarbucks className={styles["logo__icon"]} />
        <div className={styles["logo__text"]}>
          <h1>Starbucks</h1>
          <span>Store</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
