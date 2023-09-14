import React from "react";
import CartHeader from "../ui/Header";
import CartFooter from "../ui/Footer";

const SubmitForm = () => {
  return (
    <div>
      <div className="cartModal" /*onClick={cartToggleHandler}*/></div>
      <div className="cartContainer">
        <CartHeader title={"Shipping Details"} />
        <form>
          <label>Name:</label>
          <input type="text" />
          <label>Address:</label>
          <input type="text" />
          <label>Contact Number:</label>
          <input type="tel" />
        </form>
        <CartFooter />
      </div>
    </div>
  );
};

export default SubmitForm;
