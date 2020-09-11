import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Favorite from "../Favorite/Favorite";

import { useCartContext } from "../../context/CartProvider";

import { MdStar } from "react-icons/md";

import styles from "./Item.module.scss";

const Item = ({ item }) => {
  const { items } = useCartContext();

  const isInCart = items && items.find((prod) => prod.id === item.id);

  const {
    id,
    title,
    excerpt,
    price,
    priceDiscount,
    imgUrl,
    liked,
    rating,
    stock,
  } = item;

  const isOutOfStock = stock === 0;

  return (
    <li
      className={classNames(
        {
          [styles["outOfStock"]]: isOutOfStock,
        },
        styles["product"],
        styles["animated"],
        styles["fadeIn"]
      )}
    >
      <div className={styles["product__header"]}>
        {isInCart && isInCart.qty > 0 && (
          <div className={styles["product-badge"]}>{isInCart.qty}</div>
        )}

        <Favorite liked={liked} />
      </div>

      <Link to={`/products/${id}`}>
        <div className={styles["product__body"]}>
          <div className={styles["product__image"]}>
            <img loading="lazy" src={`/img/${imgUrl}`} alt={title} />
          </div>

          <div className={styles["product__rating"]}>
            {[...Array(rating)].map((_, i) => (
              <MdStar key={i} />
            ))}
          </div>

          <div className={styles["product__title"]}>{title}</div>

          <div className={styles["product__excerpt"]}>{excerpt}</div>

          <div className={styles["product__price"]}>
            {priceDiscount !== 0 ? (
              <>
                <span className={styles["price--discount"]}>${price}</span>
                <span className={styles["price"]}>${priceDiscount}</span>
              </>
            ) : (
              <span className={styles["price"]}>${price}</span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Item;
