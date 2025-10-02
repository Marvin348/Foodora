import { createContext, useContext, useEffect, useState } from "react";
import products from "../data";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (id) => {
    setCartItem((prev) => {
      const exist = prev.find((p) => p.id === id);

      if (exist) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItem((prev) => {
      const exist = prev.find((p) => p.id === id);

      if (exist.quantity > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prev.filter((item) => item.id !== id);
      }
    });
  };

  const deleteItem = (id) =>
    setCartItem((prev) => prev.filter((item) => item.id !== id));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  const itemInCart = (id) => cartItem.find((item) => item.id === id);

  const fullCartItem = cartItem.map((item) => {
    const product = products.find((p) => p.id === item.id);

    return { ...product, quantity: item.quantity };
  });

  const subTotal = fullCartItem.reduce(
    (sum, p) => sum + p.quantity * p.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        deleteItem,
        fullCartItem,
        subTotal,
        itemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
