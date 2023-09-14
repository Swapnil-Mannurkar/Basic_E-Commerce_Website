import "./App.css";
import Cart from "./Components/cart/Cart";
import Footer from "./Components/footer/Footer";
import HeroSection from "./Components/heroSection/HeroSection";
import Navbar from "./Components/navbar/Navbar";
import Products from "./Components/products/Products";
import { useSelector } from "react-redux";

function App() {
  const isCartOpen = useSelector((state) => state.cartData.isCartOpen);

  return (
    <div className={isCartOpen ? "disableScroll" : undefined}>
      <h1> Testing........</h1>
      {isCartOpen && <Cart />}
      <Navbar />
      <HeroSection />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
