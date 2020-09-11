import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SkeletonLoader from "tiny-skeleton-loader-react";

import Layout from "../../components/Common/Layout/Layout";
import ItemList from "../../components/ItemList/ItemList";
import Alert from "../../components/Alert/Alert";
import CategoryList from "../../components/CategoryList/CategoryList";

import { getFirestore } from "../../firebase";

import { MdBlock } from "react-icons/md";
import styles from "./Home.module.scss";

const Home = () => {
  const catId = useParams();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    setIsLoading(true);

    const fetchItems = async () => {
      try {
        const data = await itemCollection.get();

        const productsInCategory =
          catId && data.docs.filter((doc) => doc.data().category === catId.id);

        const filteredItems = !productsInCategory.length
          ? data.docs
          : productsInCategory;

        setIsLoading(false);

        setItems(filteredItems.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };
    fetchItems();
  }, [catId]);

  return (
    <Layout>
      <div className={styles["home"]}>
        <CategoryList />

        {isLoading && (
          <ul className={styles["fake-list"]}>
            {[...Array(8)].map((_, i) => (
              <li className={styles["fake"]} key={i}>
                <SkeletonLoader block height="272px" background="#f7f7f7" />
              </li>
            ))}
          </ul>
        )}

        {error && (
          <Alert title="Argh :/" type="danger" icon={MdBlock}>
            <p>Items not found!</p>
          </Alert>
        )}

        <ItemList items={items} />
      </div>
    </Layout>
  );
};

export default Home;
