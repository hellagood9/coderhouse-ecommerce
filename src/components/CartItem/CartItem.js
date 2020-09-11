import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartProvider";

import { MdDelete } from "react-icons/md";

import styles from "./CartItem.module.scss";

const CartItem = () => {
  const { items, removeItemFromCart } = useCartContext();

  const removeFromCartHandler = (productId) => {
    removeItemFromCart(productId);
  };

  return (
    <ul>
      {items &&
        items.map((item) => {
          const {
            id,
            title,
            excerpt,
            price,
            priceDiscount,
            imgUrl,
            stock,
            qty: prodQty,
          } = item;

          const isOutOfStock = stock === 0;

          if (prodQty === 0) return null;

          return (
            <li
              key={item.id}
              className={classNames(
                {
                  [styles["outOfStock"]]: isOutOfStock,
                },
                [styles["product"]]
              )}
            >
              <Link to={`/products/${id}`}>
                <div className={styles["product__body"]}>
                  <div className={styles["product__image"]}>
                    <div className={styles["product__badge"]}>{prodQty}</div>
                    <img loading="lazy" src={`/img/${imgUrl}`} alt={title} />
                  </div>

                  <div className={styles["wrapper"]}>
                    <div className={styles["product__title"]}>{title}</div>

                    <div className={styles["product__excerpt"]}>{excerpt}</div>

                    <div className={styles["product__price"]}>
                      {priceDiscount !== 0 ? (
                        <>
                          <span className={styles["price--discount"]}>
                            ${price}
                          </span>
                          <span className={styles["price"]}>
                            ${priceDiscount}
                          </span>
                        </>
                      ) : (
                        <span className={styles["price"]}>${price}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>

              <button type="button" onClick={() => removeFromCartHandler(id)}>
                <span className={styles["delete"]}>
                  <MdDelete />
                  Remove
                </span>
              </button>
            </li>
          );
        })}
    </ul>
  );
};

CartItem.defaultProps = {
  items: [],
};

CartItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CartItem;
