import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Layout from "../../components/Common/Layout/Layout";
import Alert from "../../components/Alert/Alert";

import { MdDone } from "react-icons/md";

import styles from "./Success.module.scss";

const Success = ({
  history: {
    location: { data },
  },
}) => {
  const orderId = data && data.id;

  return (
    <Layout>
      <div
        className={classNames(
          styles["success"],
          styles["animated"],
          styles["fadeIn"],
          styles["fast"]
        )}
      >
        {!orderId && (
          <>
            <h1 className={styles["title"]}>Failure</h1>

            <div className={styles["feedback-block"]}>
              <h4>You haven't placed an order</h4>
              <h3>Need some inspiration?</h3>

              <Link
                to="/"
                className={classNames(
                  [styles["btn"]],
                  [styles["btn-terciary"]]
                )}
              >
                Check our catalog
              </Link>
            </div>
          </>
        )}

        {orderId && (
          <>
            <h1 className={styles["title"]}>Successs</h1>

            <div className={styles["feedback-block"]}>
              <Alert title="Greattt :)" type="success" icon={MdDone}>
                <p>Your order has been created!</p>
              </Alert>

              <p>Thanks for your purchase!</p>

              <h4 className={styles["feedback-block__text"]}>
                Your order ID: #{orderId}
              </h4>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Success;
