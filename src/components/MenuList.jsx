import MenuItem from "./MenuItem";

const MenuList = ({
  meals,
  addToCart,
  removeFromCart,
  itemInCart,
  isFavorite,
  togglefavorites,
}) => {
  return (
    <div className="grid-responsive">
      {meals.map(({ name, img, price, description, id }) => (
        <MenuItem
          key={id}
          id={id}
          name={name}
          price={price}
          img={img}
          description={description}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          itemInCart={itemInCart(id)}
          isFavorite={isFavorite(id)}
          togglefavorites={togglefavorites}
          quantity={itemInCart(id)?.quantity || 0}
        />
      ))}
    </div>
  );
};
export default MenuList;
