import { useFavorites } from "../contexts/FavoritesContext";
import EmptyWishlist from "../components/EmptyWishlist";
import { useCart } from "../contexts/CartContext";
import MenuList from "../components/MenuList";
import CartBar from "../components/CartBar";
import { getFullFavorites } from "../lib/utils";
import products from "../data";
const WishlistPage = () => {
  const { addToCart, removeFromCart, itemInCart } = useCart();
  const {favorites, togglefavorites, isFavorite } = useFavorites();

  const fullFavoritesItem = getFullFavorites(favorites, products)

  if (fullFavoritesItem.length === 0) return <EmptyWishlist />;

  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-[1.7rem] my-8 font-semibold">Deine Wishlist</h2>
          <MenuList
            meals={fullFavoritesItem}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            itemInCart={itemInCart}
            isFavorite={isFavorite}
            togglefavorites={togglefavorites}
          />
        </div>
      </section>
      <CartBar />
    </>
  );
};

export default WishlistPage;
