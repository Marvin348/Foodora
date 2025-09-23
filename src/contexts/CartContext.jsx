import { createContext, useContext, useEffect, useState } from "react";
import products from "../data";

// 1. Context anlegen
// - ist einfach nur das „Sammelbecken“
// - erzeugt ein Behälter-Objekt mit .Provider und .Consumer.
const CartContext = createContext();

// 2. Provider-Component bauen
// children bedeutet: „Alles, was innerhalb von <CartProvider> ... </CartProvider> steht, wird hier reingepackt.“
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

  const removefromCart = (id) => {
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

  const fullCartItem = cartItem.map((item) => {
    const product = products.find((p) => p.id === item.id);

    return { ...product, quantity: item.quantity };
  });

  const subTotal = fullCartItem.reduce((sum, p) => sum + p.quantity * p.price, 0);


  return (
    // CartProvider ist dein eigener Wrapper, den du in main.jsx verwendest.
    // Innerhalb dieses Wrappers steckt der eigentliche CartContext.Provider, den React dir automatisch mit createContext bereitstellt.
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removefromCart,
        deleteItem,
        fullCartItem,
        subTotal,
      }}
    >
      {children}
    </CartContext.Provider>
    // Das heißt:
    // Du rufst CartProvider in main.jsx auf und dadurch wird der echte CartContext.Provider auch benutzt.
    // Du brauchst den nicht selbst aufrufen weil er im Inneren vonCartProvider schon steckt.
  );
};

// 3. Custom Hook (optional, macht Code schöner)
export const useCart = () => useContext(CartContext);

/*
useContext ist ein React-Hook:
- Du gibst ihm dein Context-Objekt (CartContext).
- Er schaut in der React-Baumstruktur nach, ob irgendwo ein Provider von diesem Context existiert.
- Er gibt dir den value zurück, den du dort gesetzt hast.
*/
