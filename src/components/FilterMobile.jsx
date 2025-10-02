import { useState } from "react";

const FilterMobile = ({ meals, onApplyFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);
  return (
    <>
      <div className="fixed bottom-8 flex justify-center w-full z-50 lg:hidden">
        <button
          className="bg-black text-white py-3 px-8 rounded-full font-bold cursor-pointer "
          onClick={toggleModal}
        >
          <i className="fa-solid fa-filter fa-lg"></i> Filtern
        </button>
      </div>
      <FilterModal
        onClose={toggleModal}
        isOpen={isOpen}
        meals={meals}
        onApplyFilter={onApplyFilter}
      />
    </>
  );
};

const FilterModal = ({ onClose, isOpen, meals, onApplyFilter }) => {
  const [filter, setFilter] = useState({
    categories: [],
    price: "",
  });

  const itemInFilter = (item) =>
    setFilter((prev) => {
      const already = prev.categories.includes(item);
      const newItem = already
        ? prev.categories.filter((p) => p !== item)
        : [...prev.categories, item];
      return { ...prev, categories: newItem };
    });

  const categories = [...new Set(meals.map((item) => item.category))];
  return (
    <>
      <div
        className={`overlay ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed bottom-0 left-2 right-2 transform transition-transform duration-500 ease-in-out z-100 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className={`w-full h-[30rem] bg-white text-black rounded-2xl p-8`}>
          <div className="border-b border-gray-300">
            <p className="font-bold">Sortieren nach Kategorie</p>
            <div className="flex flex-col items-start gap-2 my-4">
              {categories.map((item) => (
                <label className="flex items-center" key={item}>
                  <input
                    className="size-4 accent-accent"
                    type="checkbox"
                    value={item}
                    onChange={() => itemInFilter(item)}
                  />
                  <span className="ml-2">{item}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="font-bold">Preis</p>
            <div className="flex flex-col items-start gap-2 my-4">
              <label className="flex items-center">
                <input className="size-4 accent-accent" type="checkbox" />
                <span className="ml-2">Preis (aufsteigend)</span>
              </label>
              <label>
                <input className="size-4 accent-accent" type="checkbox" />
                <span className="ml-2">Preis (absteigend)</span>
              </label>
            </div>
          </div>
          <button
            className="w-full bg-black text-white py-4 px-8 rounded-full font-bold cursor-pointer"
            onClick={() => {
              onClose();
              onApplyFilter(filter);
            }}
          >
            Anwenden
          </button>
        </div>
      </div>
    </>
  );
};
export default FilterMobile;
