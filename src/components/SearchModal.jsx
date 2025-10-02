import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchModal = ({ onClose, isSearchOpen }) => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearchForm = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    onClose();
  };
  return (
    <>
      <div
        onClick={onClose}
        className={`overlay ${
          isSearchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        className={`fixed right-2 left-2 top-0 bg-white text-black p-4 rounded-2xl z-100 transform transition-transform duration-500 ease-in-out ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <form className="relative" onSubmit={handleSearchForm}>
          <input
            type="text"
            placeholder="Gib etwas ein..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            onClick={onClose}
            className="search-button"
          >
            <i className="fa-solid fa-xmark fa-xs"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchModal;
