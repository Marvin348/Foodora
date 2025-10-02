import { Link } from "react-router-dom";

const EmptyWishlist = () => {
  return (
    <div className="flex justify-center items-center h-screen text-center px-8">
      <div className="max-w-[400px] bg-gray-200 p-8 rounded-2xl">
        <i className="fa-solid fa-heart fa-2x"></i>
        <h1 className="text-2xl font-extrabold mt-2">
          Noch keine Produkte in der Wishlist
        </h1>
        <p className="text-lg mt-2 mb-4">
          Klicke auf der Herz, um Artikel zu der Wishlist hinzuzufügen
        </p>
        <Link to="/search" className="block bg-black text-white p-3 rounded-full">
          Zu den Produkten
        </Link>
      </div>
    </div>
  );
};
export default EmptyWishlist;
