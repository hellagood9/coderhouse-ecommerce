import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/firestore";

import { getFirestore } from "../../firebase";
import { useCartContext } from "../../context/CartProvider";

import Layout from "../../components/Common/Layout/Layout";
import CartItem from "../../components/CartItem/CartItem";
import CartFooter from "../../components/CartFooter/CartFooter";
import Alert from "../../components/Alert/Alert";
import Spinner from "../../components/Spinner/Spinner";

import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { MdBlock } from "react-icons/md";

import styles from "./Cart.module.scss";

const Cart = (props) => {
  const { items, resetCart } = useCartContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [buyer, setBuyer] = useState({});

  const getTotal = () =>
    items &&
    items.reduce(
      (ac, cv) =>
        ac +
        (cv.priceDiscount > 0 ? cv.priceDiscount : cv.price).toFixed(2) *
          cv.qty,
      0
    );

  const createOrder = async () => {
    const db = getFirestore();
    const orders = db.collection("orders");

    const newOrder = {
      buyer,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: getTotal(),
    };

    setIsLoading(true);

    try {
      const { id } = await orders.add(newOrder);

      setIsLoading(false);
      resetCart();

      props.history.push({
        pathname: "/success",
        data: {
          id,
        },
      });
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  const handleSubmit = (formData) => {
    setIsFormSubmitted(true);
    setBuyer(formData);
  };

  return (
    <Layout>
      <div
        className={classNames(
          styles["cart"],
          styles["animated"],
          styles["fadeIn"],
          styles["fast"]
        )}
      >
        <h1 className={styles["title"]}>Cart page</h1>

        {!items.length && (
          <div className={styles["feedback-block"]}>
            <h4>Your cart is empty</h4>
            <h3>Need some inspiration?</h3>

            <Link
              to="/"
              className={classNames([styles["btn"]], [styles["btn-terciary"]])}
            >
              Check our catalog
            </Link>
          </div>
        )}

        {error && (
          <Alert title="Argh :/" type="danger" icon={MdBlock}>
            <p>The order couldn't be created!</p>
          </Alert>
        )}

        {isLoading && <Spinner />}

        <CartItem items={items} />

        {!!items.length && <CheckoutForm onFormSubmit={handleSubmit} />}

        <CartFooter
          items={items}
          createOrder={createOrder}
          isReady={isFormSubmitted}
        />
      </div>
    </Layout>
  );
};

export default Cart;
