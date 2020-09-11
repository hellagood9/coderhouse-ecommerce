import React from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartProvider";

import { MdShoppingBasket } from "react-icons/md";
import styles from "./CartIcon.module.scss";

const CartIcon = () => {
  const { items } = useCartContext();
  const totalItemsInCart = items.reduce((ac, ci) => ci.qty + ac, 0);

  return (
    <Link to="/cart">
      <div className={styles["cart"]}>
        <MdShoppingBasket className={styles["cart__icon"]} />

        {totalItemsInCart > 0 && (
          <div className={styles["cart__badge"]}>
            <span>{totalItemsInCart}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
