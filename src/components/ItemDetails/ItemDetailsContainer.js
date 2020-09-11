import React, { useEffect, useState } from "react";

import { getFirestore } from "../../firebase";

import ItemDetails from "./ItemDetails";

const ItemDetailsContainer = ({ id }) => {
  const { id: productId } = id;

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    setIsLoading(true);

    const fetchItem = async () => {
      const myItem = itemCollection.doc(productId);
      // const myItem = itemCollection.doc("cIvrVsT5lgLiG44qzu9Cn");

      try {
        const data = await myItem.get();
        if (!data.exists) throw new Error();

        setIsLoading(false);

        setItem(data.data());
      } catch (error) {
        setError({ msg: "This item was not found" });
        setIsLoading(false);
      }
    };
    fetchItem();
  }, [id, productId]);

  return (
    <ItemDetails
      item={{ ...item, ...id }}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default ItemDetailsContainer;
