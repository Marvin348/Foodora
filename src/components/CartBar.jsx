import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const CartBar = () => {
  const { subTotal, fullCartItem } = useCart();

  if (fullCartItem.length === 0) return null;
  return (
    <Link
      to="/cart"
      className="bg-accent fixed inset-x-8 bottom-2 rounded-full py-2 px-8 flex items-center justify-between text-white z-50 lg:hidden font-bold"
    >
      <div>
        <i className="fa-solid fa-basket-shopping"></i>
      </div>
      <div className="cartbar__mid">
        <h3>Warenkorb ansehen</h3>
      </div>
      <div className="cartbar__right">
        <p>{`${subTotal}€`}</p>
      </div>
    </Link>
  );
};
export default CartBar;
