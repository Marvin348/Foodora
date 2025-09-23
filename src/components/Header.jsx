import logo from "@/assets/logo.svg";
import { useCart } from "../contexts/CartContext";
import { useFavorites } from "../contexts/FavoritesContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItem } = useCart();
  const { favorites } = useFavorites();
  return (
    <header>
      <div className="container">
        <nav className="flex items-center justify-between gap-8 py-4">
          <div>
            <img className="nav__logo" src={logo} alt="" />
          </div>
          <div>
            <ul className="hidden items-center gap-12 list-none lg:flex">
              <li>
                <a className="font-semibold" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="font-semibold" href="#">
                  Menü
                </a>
              </li>
              <li>
                <a className="font-semibold" href="#">
                  Über Uns
                </a>
              </li>
              <li>
                <a className="font-semibold" href="#">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="nav__user-menu flex items-center gap-6">
              <a href="#" className="relative">
                <i className="fa-solid fa-heart fa-lg"></i>
                {favorites.length > 0 && (
                  <span className="absolute top-0 right-0 bg-accent w-3.5 h-3.5 rounded-full"></span>
                )}
              </a>
              <Link to="/cart" className="relative">
                <i className="fa-solid fa-basket-shopping fa-lg"></i>
                {cartItem.length > 0 && (
                  <span className="absolute top-0 right-0 bg-accent w-3.5 h-3.5 rounded-full"></span>
                )}
              </Link>
              <a href="#" className="hidden sm:block border-2 border-accent p-1 rounded-full">
                <i className="fa-solid fa-user fa-lg"></i> Log In
              </a>
              <div className="block sm:hidden">
                <button className="bg-none border-0 cursor-pointer">
                  <i className="fa-solid fa-bars fa-2xl"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
