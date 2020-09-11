import React from "react";
import { Link } from "react-router-dom";

import avatar from "../../assets/img/avatar.png";
import styles from "./Avatar.module.scss";

const Avatar = () => {
  return (
    <div className={styles["avatar"]}>
      <Link to="/">
        <span className={styles["avatar__img"]}>
          <img src={avatar} alt="Mary Jane" />
        </span>

        <div className={styles["user"]}>
          <span className={styles["user__greet"]}>Hello</span>
          <span className={styles["user__name"]}>Mary Jane</span>
        </div>
      </Link>
    </div>
  );
};

export default Avatar;
