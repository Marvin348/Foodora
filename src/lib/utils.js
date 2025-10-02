export const getUniqueCategories = (meals) => [
  ...new Set(meals.map((item) => item.category)),
];

export const getFullFavorites = (favorites, products) => {
  return favorites.map((favId) => {
    const product = products.find((p) => p.id === favId);
    return { id: favId, ...product };
  });
};

