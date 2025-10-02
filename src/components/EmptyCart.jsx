import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex justify-center items-center h-screen text-center px-8">
      <div className="max-w-[400px] bg-gray-200 p-8 rounded-2xl">
        <i className="fa-solid fa-basket-shopping fa-2x"></i>
        <h1 className="text-2xl font-extrabold mt-2">
          Noch keine Produkte im Warenkorb
        </h1>
        <p className="text-lg mt-2 mb-4">
          Klicke auf hinzufügen, um Artikel im Warenkorb zu sehen
        </p>
        <Link to="/search" className="block bg-black text-white p-3 rounded-full">
          Zu den Produkten
        </Link>
      </div>
    </div>
  );
};
export default EmptyCart;
