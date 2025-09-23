import "./index.css";
import products from "./data";
import testimonials from "./testimonials";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import CartBar from "./components/CartBar";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Menu meals={products} />
      <CartBar />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </>
  );
}

export default App;
