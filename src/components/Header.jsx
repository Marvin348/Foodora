import logo from "@/assets/logo.svg";
import { useCart } from "../contexts/CartContext";
import { useFavorites } from "../contexts/FavoritesContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchModal from "./SearchModal";
import HamburgerMenu from "./HamburgerMenu.jsx";

const Header = ({ meals, categories }) => {
  const { cartItem } = useCart();
  const { favorites } = useFavorites();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleIsSearchOpen = () => setIsSearchOpen(!isSearchOpen);
  const toggleIsHamburgerOpen = () => setIsHamburgerOpen(!isHamburgerOpen);

  return (
    <header>
      <div className="container">
        <nav className="flex items-center justify-between w-full gap-8 py-4">
          <div className="flex items-center gap-4 lg:order-2">
            <div className="block lg:hidden">
              <button
                className="bg-none border-0 cursor-pointer"
                onClick={toggleIsHamburgerOpen}
              >
                <i className="fa-solid fa-bars fa-lg text-black"></i>
              </button>
              <HamburgerMenu
                onClose={toggleIsHamburgerOpen}
                isHamburgerOpen={isHamburgerOpen}
                meals={meals}
                categories={categories}
              />
            </div>
            <button
              className="cursor-pointer lg:hidden"
              onClick={toggleIsSearchOpen}
            >
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
            <SearchModal
              onClose={toggleIsSearchOpen}
              isSearchOpen={isSearchOpen}
            />
            <ul className="hidden items-center justify-between gap-8 text-black font-semibold lg:flex xl:gap-12 xl:font-bold">
              <li>
                <Link to="/search">Alle</Link>
              </li>
              <li>
                <Link to="/search">Neu</Link>
              </li>
              {categories.map((item) => (
                <li key={item}>
                  <Link to={`/search?category=${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:order-1">
            <Link to="/">
              <img className="w-[6rem] sm:w-[7.5rem]" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-4 lg:order-3">
            <Link to="/wishlist" className="relative">
              <i className="fa-solid fa-heart fa-lg"></i>
              {favorites.length > 0 && (
                <span className="absolute top-0 right-0 bg-accent w-3.5 h-3.5 rounded-full"></span>
              )}
            </Link>
            <Link to="/cart" className="relative">
              <i className="fa-solid fa-basket-shopping fa-lg"></i>
              {cartItem.length > 0 && (
                <span className="absolute top-0 right-0 bg-accent w-3.5 h-3.5 rounded-full"></span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
