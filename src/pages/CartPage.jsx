import CartItem from "../components/CartItem";
import { useCart } from "../contexts/CartContext";
import EmptyCart from "../components/EmptyCart";
import { useState } from "react";

const CartPage = () => {
  const { addToCart, removeFromCart, fullCartItem, subTotal, deleteItem } =
    useCart();

  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedCode, setAppliedCode] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (code === "TRY10") {
      setDiscount((subTotal * 10) / 100);
      setAppliedCode(code);
    } else {
      setDiscount(0);
    }
  };

  const total = subTotal - discount;

  if (fullCartItem.length === 0) return <EmptyCart />;
  return (
    <section className="cart">
      <div className="container">
        <h2 className="text-[1.7rem] my-8 font-semibold">Warenkorb</h2>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="border border-gray-300 p-4 rounded-2xl md:basis-[60%] w-full">
            {fullCartItem.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                cartImg={item.img}
                cartName={item.name}
                cartPrice={item.price}
                cartQuantity={item.quantity}
                cartCategory={item.category}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                deleteItem={deleteItem}
              />
            ))}
          </div>
          <div className="border border-gray-300 p-4 rounded-2xl w-full mb-4 md:basis-[40%]">
            <h3 className="mb-4 text-[1.3rem]">Zusammenfassung</h3>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                Zwischensumme
                <span className="font-semibold">{`${subTotal}€`}</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  Rabatt
                  {appliedCode === "TRY10" && (
                    <p className="text-[0.7rem] line-through text-red-600">
                      TRY10
                    </p>
                  )}
                </div>
                <span className="font-semibold">{`${discount}€`}</span>
              </div>
              <div className="flex justify-between items-center">
                Versandkosten <span className="font-semibold">0€</span>
              </div>
              <div>
                <div className="pb-3">
                  <form className="relative" onSubmit={handleForm}>
                    <input
                      className="w-full rounded-2xl bg-gray-100 p-2 border-none focus:outline-none"
                      type="text"
                      placeholder="Rabattcode"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <button
                      className="bg-black text-white rounded-2xl p-1 mt-2 w-full cursor-pointer sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[100px]"
                      type="submit"
                    >
                      Anwenden
                    </button>
                  </form>
                </div>
                <div className="pt-4 border-t border-gray-300">
                  <div className="flex justify-between items-center">
                    Gesammtsumme
                    <span className="font-extrabold">{`${total}€`}</span>
                  </div>
                  <button className="block mt-2 bg-black text-white w-full p-2 rounded-full cursor-pointer md:w-full">
                    Zum Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CartPage;
