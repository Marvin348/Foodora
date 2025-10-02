import { Link } from "react-router-dom";
const HamburgerMenu = ({ onClose, isHamburgerOpen, categories }) => {
  return (
    <>
      <div
        className={`overlay ${
          isHamburgerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <aside
        className={`fixed top-0 bottom-0 left-0 z-100 transform transition-transform duration-500 ease-in-out ${
          isHamburgerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="grid grid-rows-[5rem_1fr_5rem] gap-4 p-4 bg-white rounded-r-2xl h-full w-[15rem]">
          <button
            onClick={onClose}
            className="text-left rounded-full w-8 h-8 border border-gray-300 flex items-center justify-center"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className="flex flex-col justify-start gap-4 font-bold">
            <li onClick={onClose}>
              <Link to="/search">Alle</Link>
            </li>
            {categories.map((item) => (
              <li key={item} onClick={onClose}>
                <Link to={`/search?category=${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-300 pt-4">
            <a href="#">
              <i className="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter fa-lg"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-pinterest fa-lg"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook fa-lg"></i>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
export default HamburgerMenu;
