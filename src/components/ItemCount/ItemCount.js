import React, { useState, useEffect } from "react";

import styles from "./ItemCount.module.scss";
import Alert from "../Alert/Alert";

import { MdErrorOutline } from "react-icons/md";

const ItemCount = ({ initial = 1, min = 1, max, onUpdate }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const updateCounter = (counter) => {
      onUpdate(counter);
    };

    updateCounter(count);
  }, [count, onUpdate]);

  const incrementCount = () => count < max && setCount((count) => count + 1);
  const decrementCount = () => count > min && setCount((count) => count - 1);

  return (
    <>
      <div className={styles["counter"]}>
        <button
          className={styles["minus"]}
          onClick={decrementCount}
          disabled={count === min}
        >
          -
        </button>
        <div className={styles["amount"]}>{count}</div>
        <button
          className={styles["add"]}
          onClick={incrementCount}
          disabled={count === max}
        >
          +
        </button>
      </div>

      {count === max && (
        <Alert title="Oops ..." type="warning" icon={MdErrorOutline}>
          <p>The maximum stock available for this product is {max}</p>
        </Alert>
      )}
    </>
  );
};

export default ItemCount;
