import Counter from "./Counter";
const MenuItem = ({
  img,
  name,
  price,
  id,
  description,
  quantity,
  addToCart,
  removeFromCart,
  itemInCart,
  isFavorite,
  togglefavorites,
}) => {
  return (
    <div className="shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-b-2xl relative ">
      <img src={img} alt="" className="w-full h-auto rounded-t-2xl " />
      <div>
        <button
          onClick={() => togglefavorites(id)}
          className={`absolute top-4 right-4 size-[2.5rem]  text-2xl bg-white rounded-full flex items-center justify-center cursor-pointer border-none ${
            isFavorite ? "text-red-600" : ""
          }`}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <div>
            <p className="text-sm">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          {itemInCart ? (
            <Counter
              value={quantity}
              onIncrease={() => addToCart(id)}
              onDecrease={() => removeFromCart(id)}
            />
          ) : (
            <div className="flex items-center justify-center">
              <button
                className="text-accent border-2 font-bold rounded-full bg-none p-[0.3rem] cursor-pointer text-[0.8rem]"
                onClick={() => addToCart(id)}
              >
                + Hinzufügen
              </button>
            </div>
          )}
          <p className="font-semibold">{price}€</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
