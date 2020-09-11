import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItemToCart = (item, qty) => {
    const product = items.find((prod) => prod.id === item.id);

    const existInCart = product && [
      ...items.filter((i) => i.id !== product.id),
      { ...product, qty: product.qty + qty },
    ];

    setItems((prevItems) =>
      product ? existInCart : [...prevItems, { ...item, qty }]
    );
  };

  const removeItemFromCart = (item) => {
    const products = items.filter((i) => i.id !== item);
    setItems(products);
  };

  return (
    <CartContext.Provider value={{ items, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartProvider };
