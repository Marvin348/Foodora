import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useFavorites } from "../contexts/FavoritesContext";
import MenuList from "./MenuList";
import { getUniqueCategories } from "../lib/utils";

const Menu = ({ meals }) => {
  const [filter, setFilter] = useState("Burger");
  const { addToCart, removefromCart, itemInCart } = useCart();
  const { togglefavorites, isFavorite } = useFavorites();

  const filteredMeals =
    filter === "Alle"
      ? meals
      : meals.filter((item) => item.category === filter);

  const categories = getUniqueCategories(meals);

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
        <div className="mt-8 flex items-center overflow-x-auto no-scrollbar gap-4">
          {categories.map((item) => (
            <button
              key={item}
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
        {
          <MenuList
            meals={filteredMeals}
            addToCart={addToCart}
            removefromCart={removefromCart}
            itemInCart={itemInCart}
            isFavorite={isFavorite}
            togglefavorites={togglefavorites}
          />
        }
      </div>
    </section>
  );
};

export default Menu;
