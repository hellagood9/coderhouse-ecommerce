import React from "react";

import styles from "./Spinner.module.scss";

const Spinner = () => (
  <div className={styles["wrapper"]}>
    <div className={styles["snippet"]} data-title=".dot-pulse">
      <div className={styles["stage"]}>
        <div className={styles["dot-pulse"]}></div>
      </div>
    </div>
  </div>
);

export default Spinner;
