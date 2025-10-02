import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import products from "../data";
import { getUniqueCategories } from "../lib/utils";
const AppLayout = () => {
  const categories = getUniqueCategories(products);
  return (
    <>
      <Header meals={products} categories={categories} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default AppLayout;
