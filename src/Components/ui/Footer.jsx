import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartDataActions } from "../../store/cartData";
import "./Footer.css";

const CartFooter = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cartData.totalAmount);

  const cartToggleHandler = () => {
    if (props.type === "cart") dispatch(cartDataActions.toggleIsCartOpen());
    if (props.type === "submitForm") {
      dispatch(cartDataActions.toggleIsSubmitFormOpen());
      dispatch(cartDataActions.toggleIsCartOpen());
    }
  };

  const submitHandler = () => {
    if (props.type === "cart") {
      dispatch(cartDataActions.toggleIsSubmitFormOpen());
      dispatch(cartDataActions.toggleIsCartOpen());
    }

    if (props.type === "submitForm") {
      window.location.reload();
    }
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
          {props.cancel}
        </Button>
        <Button
          variant="contained"
          className="cartSubmitButton orderButton"
          onClick={submitHandler}
          type="submit"
        >
          {props.submit}
        </Button>
      </div>
    </>
  );
};

export default CartFooter;
