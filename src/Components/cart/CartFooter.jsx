import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartDataActions } from "../../store/cartData";
import "./CartFooter.css"

const CartFooter = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cartData.totalAmount);

  const cartToggleHandler = () => {
    dispatch(cartDataActions.toggleIsCartOpen());
  };

  return (
    <>
      <hr
        style={{
          height: "2px",
          borderWidth: "0",
          backgroundColor: "black",
        }}
      />
      <div className="cartItemsTotal">
        <h4>Total Amount:</h4>
        <h4>₹ {totalAmount}</h4>
      </div>
      <div className="cartSubmit">
        <Button
          variant="contained"
          className="cartSubmitButton cancelButton"
          onClick={cartToggleHandler}
        >
          Cancel
        </Button>
        <Button variant="contained" className="cartSubmitButton orderButton">
          Order
        </Button>
      </div>
    </>
  );
};

export default CartFooter;
