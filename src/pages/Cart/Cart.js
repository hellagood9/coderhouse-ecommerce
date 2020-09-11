import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/firestore";

import { getFirestore } from "../../firebase";
import { useCartContext } from "../../context/CartProvider";

import Layout from "../../components/Common/Layout/Layout";
import CartItem from "../../components/CartItem/CartItem";

import styles from "./Cart.module.scss";

const Cart = () => {
  const { items } = useCartContext();

  const getTotal = () => {
    return items.reduce((prev, next) => prev + next.qty * next.price, 0);
  };

  const createOrder = async () => {
    const db = getFirestore();

    const mockedBuyer = {
      name: "Max",
      phone: 645456433,
      email: "max@coder.com",
    };

    const yeah = items.map((item) => ({ id: item.id, qty: item.qty }));

    console.log("yeah", yeah);

    const orders = db.collection("orders");

    const newOrder = {
      buyer: mockedBuyer,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: getTotal(),
    };

    try {
      const { id } = await orders.add(newOrder);
      // TODO: dar al user su ID de orden autogenerada
      console.log("id", id);
    } catch (err) {
      console.log("Error", err);
    }
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

        <button onClick={createOrder}>Checkout</button>

        {!items.length && (
          <div className={styles["empty-cart__block"]}>
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

        <CartItem items={items} />
      </div>
    </Layout>
  );
};

export default Cart;
