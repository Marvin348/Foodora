import { useState } from "react";

const useFilter = (products, query) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleApplyFilter = (filter) => setActiveFilter(filter);

  let filteredName = products.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  let filteredProducts = filteredName;

  if (activeFilter?.categories.length > 0) {
    filteredProducts = filteredName.filter(({ category }) =>
      activeFilter.categories.includes(category)
    );
  }
  return { filteredProducts, activeFilter, setActiveFilter,handleApplyFilter };
};
export default useFilter;
