import { useSearchParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useFavorites } from "../contexts/FavoritesContext";
import useFilter from "../hooks/useFilter";
import products from "../data";
import MenuList from "../components/MenuList";
import { useEffect, useState } from "react";
import FilterMobile from "../components/FilterMobile";

const SearchPage = () => {
  const { addToCart, removeFromCart, itemInCart } = useCart();
  const { togglefavorites, isFavorite } = useFavorites();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";
  const [searchValue, setSearchValue] = useState(query);
  const activeCategory = searchParams.get("category") || "";

  const { filteredProducts, activeFilter, setActiveFilter, handleApplyFilter } =
    useFilter(products, query);

  useEffect(() => {
    if (activeCategory) {
      setActiveFilter({ categories: [activeCategory] });
    } else {
      setActiveFilter(null);
    }
  }, [activeCategory]);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchValue });
  };

  return (
    <section className="mt-8">
      <div className="container">
        <div className="mx-auto mb-8 text-center md:max-w-[25rem]">
          <h2 className="text-xl font-semibold">
            {filteredProducts.length} Artikel gefunden
          </h2>
          {activeFilter?.categories.length > 0 && (
            <div className="mt-2 text-xs">
              <button className="text-white bg-black p-2 rounded-2xl">
                <i className="fa-solid fa-filter"></i>{" "}
                {activeFilter?.categories.join(", ")}
              </button>
            </div>
          )}
          <form className="relative mt-4" onSubmit={handleSearch}>
            <input
              className="search-input"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="search-button" type="submit">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
          </form>
        </div>
        <MenuList
          meals={filteredProducts}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          itemInCart={itemInCart}
          isFavorite={isFavorite}
          togglefavorites={togglefavorites}
        />
      </div>
      <FilterMobile meals={products} onApplyFilter={handleApplyFilter} />
    </section>
  );
};
export default SearchPage;
