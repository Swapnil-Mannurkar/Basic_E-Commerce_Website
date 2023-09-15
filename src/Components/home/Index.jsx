import React, { useContext } from "react";
import Cart from "../cart/Cart";
import Footer from "../footer/Footer";
import HeroSection from "../heroSection/HeroSection";
import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
import SubmitForm from "../submitForm/SubmitForm";
import Dropdown from "../dropdown/Dropdown";
import { useSelector } from "react-redux";
import AuthContext from "../../assests/store/AuthContext";

const Index = () => {
  const isCartOpen = useSelector((state) => state.cartData.isCartOpen);
  const isSubmitFormOpen = useSelector(
    (state) => state.cartData.isSubmitFormOpen
  );
  const context = useContext(AuthContext);

  return (
    <>
      <div
        className={
          isCartOpen || isSubmitFormOpen || context.isDisplayDropdown
            ? "disableScroll"
            : undefined
        }
      >
        {isCartOpen && <Cart />}
        {isSubmitFormOpen && <SubmitForm />}
        {context.isDisplayDropdown && <Dropdown />}
        <Navbar />
        <HeroSection />
        <Products />
        <Footer />
      </div>
    </>
  );
};

export default Index;
