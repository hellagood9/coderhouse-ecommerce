import React from "react";
import classNames from "classnames";
import { useLocation, Link } from "react-router-dom";

import { ReactComponent as LogoStarbucks } from "../../assets/img/starbucks-logo.svg";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  const location = useLocation();

  return (
    <div
      className={classNames(
        styles["not-found"],
        styles["animated"],
        styles["fadeIn"],
        styles["fast"]
      )}
    >
      <h1 className={styles["title"]}>Not Found</h1>

      <h3 className={styles["pathname"]}>
        No match for <code>{location.pathname}</code>
      </h3>

      <LogoStarbucks className={styles["logo__icon"]} />

      <p className={styles["message"]}>
        No cookies, no coffee, no nothing here ... sorry!
      </p>

      <Link
        to="/"
        className={classNames(styles["btn"], styles["btn-terciary"])}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
