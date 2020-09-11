import React from "react";

import Item from "../Item/Item";

import styles from "./ItemList.module.scss";

const ItemList = ({ items }) => {
  return (
    <ul className={styles["items-list"]}>
      {items && items.map((item) => <Item key={item.id} item={item} />)}
    </ul>
  );
};

export default ItemList;
