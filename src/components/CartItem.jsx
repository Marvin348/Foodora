import Counter from "./Counter";
const CartItem = ({
  id,
  cartImg,
  cartName,
  cartPrice,
  cartQuantity,
  cartCategory,
  removefromCart,
  addToCart,
  deleteItem,
}) => {
  return (
    <div className="flex flex-col gap-2 items-start border-b border-gray-300 py-4 last:border-b-0 sm:flex-row sm:gap-7">
      <img
        src={cartImg}
        alt={cartName}
        className="w-30 h-30  object-cover rounded-2xl sm:w-28 sm:h-auto"
      />
      <div className="flex flex-col items-start w-full">
        <div className="flex justify-between items-center w-full gap-12">
          <h3 className="font-semibold text-lg">{cartName}</h3>
          <button
            onClick={() => deleteItem(id)}
            className="bg-transparent border-0 text-base cursor-pointer transition duration-200 ease-in-out hover:text-red-600"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <p className="text-gray-600 text-sm">Kategorie: {cartCategory}</p>
        <div className="flex flex-col items-start gap-4 justify-between mt-2 sm:flex-row sm:w-full">
          <span className="font-semibold">{cartPrice}€</span>
          <Counter
            value={cartQuantity}
            onDecreade={() => removefromCart(id)}
            onIncrease={() => addToCart(id)}
          />
        </div>
      </div>
    </div>
  );
};
export default CartItem;
