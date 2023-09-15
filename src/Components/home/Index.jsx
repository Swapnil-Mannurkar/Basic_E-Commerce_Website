import React from "react";
import Cart from "../cart/Cart";
import Footer from "../footer/Footer";
import HeroSection from "../heroSection/HeroSection";
import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
import SubmitForm from "../submitForm/SubmitForm";
import { useSelector } from "react-redux";

const Index = () => {
  const isCartOpen = useSelector((state) => state.cartData.isCartOpen);
  const isSubmitFormOpen = useSelector(
    (state) => state.cartData.isSubmitFormOpen
  );

  return (
    <>
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
    </>
  );
};

export default Index;
