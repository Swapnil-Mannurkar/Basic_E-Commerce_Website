import "./App.css";
import Cart from "./Components/cart/Cart";
import Footer from "./Components/footer/Footer";
import HeroSection from "./Components/heroSection/HeroSection";
import Navbar from "./Components/navbar/Navbar";
import Products from "./Components/products/Products";
import { useSelector } from "react-redux";
import SubmitForm from "./Components/submitForm/SubmitForm";

function App() {
  const isCartOpen = useSelector((state) => state.cartData.isCartOpen);
  const isSubmitFormOpen = useSelector(
    (state) => state.cartData.isSubmitFormOpen
  );

  console.log("Cart", isCartOpen);
  console.log("Form", isSubmitFormOpen);

  return (
    <div
      className={isCartOpen || isSubmitFormOpen ? "disableScroll" : undefined}
    >
      {isCartOpen && <Cart />}
      {isSubmitFormOpen && <SubmitForm />}
      <Navbar />
      <HeroSection />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
