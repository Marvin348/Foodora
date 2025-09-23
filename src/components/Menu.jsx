import { useState } from "react";
import categories from "../categories";
import { useCart } from "../contexts/CartContext";
import { useFavorites } from "../contexts/FavoritesContext";
import Counter from "./Counter";

const Menu = ({ meals }) => {
  const [filter, setFilter] = useState("Burger");
  const { cartItem, addToCart, removefromCart } = useCart();
  const { favorites, togglefavorites } = useFavorites();

  return (
    <section className="mt-12">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-2">Entdecke unser Menü</h2>
        <p className="leading-normal">
          Entdecke unser sorgfältig zusammengestelltes Menü – von klassischen
          Lieblingsgerichten bis zu kreativen Neuheiten. Von herzhaften Burgern
          über feine Pasta bis zu verlockenden Desserts – hier ist für jeden
          Geschmack etwas dabei.
        </p>
        <div className="mt-8 flex justify-start items-center gap-4">
          {categories.map((item, i) => (
            <button
              key={i}
              onClick={() => setFilter(item)}
              className={`border-2 px-2 rounded-full cursor-pointer ${
                filter === item
                  ? "border-accent text-accent"
                  : "border-gray-300 text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="py-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          {meals
            .filter((item) => filter === "Alle" || item.category === filter)
            .map(({ id, name, img, price, rating, quantity }) => {
              const itemInCart = cartItem.find((item) => item.id === id);
              const isFavorite = favorites.includes(id);

              return (
                <MenuItem
                  key={id}
                  id={id}
                  name={name}
                  img={img}
                  price={price}
                  rating={rating}
                  quantity={itemInCart?.quantity}
                  addToCart={addToCart}
                  removefromCart={removefromCart}
                  itemInCart={itemInCart}
                  isFavorite={isFavorite}
                  togglefavorites={togglefavorites}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({
  img,
  name,
  price,
  rating,
  id,
  quantity,
  addToCart,
  removefromCart,
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
        <div className="flex items-center justify-between gap-4 mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-[0.8rem]">
            <i className="fa-solid fa-star text-yellow-500"></i> ({rating})
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quidem a
          expedita!
        </p>
        <div className="flex items-center justify-between mt-2">
          {itemInCart ? (
            <Counter
              value={quantity}
              onIncrease={() => addToCart(id)}
              onDecreade={() => removefromCart(id)}
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

export default Menu;
