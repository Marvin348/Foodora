import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { useCart } from "../../contexts/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const {
    cartItem,
    addToCart,
    removefromCart,
    fullCartItem,
    subTotal,
    deleteItem,
  } = useCart();

  console.log(fullCartItem);
  console.log(subTotal);

  return (
    <section className="cart">
      <div className="container">
        <Link to="/" className="cart__link">
          <button>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </Link>
        <h2 className="cart__heading">Warenkorb</h2>
        {fullCartItem.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            cartImg={item.img}
            cartName={item.name}
            cartPrice={item.price}
            cartQuantity={item.quantity}
            cartCategory={item.category}
            removefromCart={removefromCart}
            addToCart={addToCart}
            deleteItem={deleteItem}
          />
        ))}
        <div className="cart__summary">
          <h3 className="cart__summary-title">Zusammenfassung</h3>
          <div className="cart__summary-controls">
            <p>
              Zwischensumme
              <span className="cart__summary-subtotal">{`${subTotal}€`}</span>
            </p>
            <p>
              Rabatt<span className="cart__summary-discount"></span>
            </p>
            <p>
              Versandkosten <span className="cart__summary-shipment"></span>
            </p>
            <div>
              <form className="cart__summary-form">
                <input
                  className="cart__summary-input"
                  type="text"
                  placeholder="Geschenkekarte oder Rabattcode"
                />
                <button className="cart__summary-btn" type="submit">
                  Anwenden
                </button>
              </form>
              <div className="cart__summary-footer">
                <p>
                  Gesammtsumme
                  <span className="cart__summary-total">{`${subTotal}€`}</span>
                </p>
                <button className="cart__summary-checkout">Zum Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CartPage;
