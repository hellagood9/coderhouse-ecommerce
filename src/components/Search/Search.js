import React from "react";

import { MdSearch } from "react-icons/md";

import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles["search"]}>
      <MdSearch />
      <input type="text" placeholder="Search for items, categories and more …" />
    </div>
  );
};

export default Search;
