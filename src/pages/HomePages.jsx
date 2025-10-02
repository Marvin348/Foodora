import "../index.css";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Menu from "../components/Menu";
import CartBar from "../components/CartBar";
import testimonials from "../testimonials";
import products from "../data";
import DiscountPopup from "../components/DiscountPopup";

const HomePage = () => {
  return (
    <>
      <DiscountPopup />
      <Hero />
      <Menu meals={products} />
      <CartBar />
      <Testimonials testimonials={testimonials} />
    </>
  );
};
export default HomePage;
