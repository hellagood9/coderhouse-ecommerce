import React from "react";

import Button from "../../components/Button/Button";

import styles from "./CartFooter.module.scss";

const CartFooter = ({ items, createOrder, isReady }) => {
  return (
    items.length > 0 && (
      <div className={styles["cart__actions"]}>
        <h4 className={styles["subtotal"]}>
          Subtotal: $
          <span>
            {items &&
              items.reduce((ac, cv) => ac + (cv.priceDiscount > 0 ? cv.priceDiscount : cv.price) * cv.qty, 0).toFixed(2)}
          </span>
        </h4>

        <Button
          disabled={!isReady}
          type="terciary"
          handleClick={createOrder}
          label="Checkout"
        />
      </div>
    )
  );
};

export default CartFooter;
