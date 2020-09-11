import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import ItemCount from "../ItemCount/ItemCount";
import Rating from "../Rating/Rating";
import Alert from "../Alert/Alert";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";

import { useCartContext } from "../../context/CartProvider";

import {
  MdDone,
  MdShoppingBasket,
  MdSentimentDissatisfied,
} from "react-icons/md";
import styles from "./ItemDetailsContainer.module.scss";

const ItemDetail = ({ item, isLoading, error }) => {
  const [counter, setCounter] = useState(null);
  const [show, setShow] = useState(false);

  const { addItemToCart } = useCartContext();

  const {
    category,
    excerpt,
    imgUrl,
    price,
    priceDiscount,
    rating,
    title,
    stock,
  } = item;

  const handleCounterUpdate = (count) => {
    setCounter(count);
  };

  const handleAddToCart = (count) => {
    setShow(true);

    setTimeout(() => {
      addItemToCart(item, count);
      setShow(false);
    }, 800);
  };

  return (
    <>
      {isLoading && <Spinner />}

      <div
        className={classNames(
          styles["product"],
          styles["animated"],
          styles["fadeIn"],
          styles["fast"]
        )}
      >
        <h1 className={styles["product__title"]}>{title}</h1>
        <p className={styles["product__excerpt"]}>{excerpt}</p>

        {!isLoading && error && (
          <div className={styles["empty-cart__block"]}>
            <>
              <Alert
                title="Arggg ..."
                type="danger"
                icon={MdSentimentDissatisfied}
                full
              >
                <p>{error.msg}</p>
              </Alert>

              <h3>Other items that You might love</h3>

              <Link
                to="/"
                className={classNames(
                  [styles["btn"]],
                  [styles["btn-terciary"]]
                )}
              >
                Check our catalog
              </Link>
            </>
          </div>
        )}

        {!isLoading && !error && (
          <>
            <div className={styles["product__more"]}>
              <span className={styles["product__category"]}>
                <Link to={`/category/${category}`}>{category}</Link>
              </span>
              <Rating rating={rating} />
            </div>

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

            <div className={styles["qty-price"]}>
              {stock > 0 && (
                <ItemCount
                  initial={1}
                  min={1}
                  max={stock}
                  onUpdate={handleCounterUpdate}
                />
              )}

              {show && (
                <Alert title="Greattt :)" type="success" icon={MdDone} float>
                  <p>{counter} item(s) added to the cart!</p>
                </Alert>
              )}

              {stock === 0 && <span>This product is out of stock</span>}
            </div>

            {stock > 0 && (
              <Button
                disabled={false}
                type="primary"
                handleClick={() => handleAddToCart(counter)}
                label={
                  <span>
                    Add to cart{" "}
                    {counter && (
                      <span className={styles["count"]}>{counter}</span>
                    )}
                  </span>
                }
                icon={MdShoppingBasket}
              />
            )}

            {imgUrl && (
              <img loading="lazy" src={`/img/${imgUrl}`} alt={title} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
