import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { cartDataActions } from "../../store/cartData";
import "./Header.css";

const CartHeader = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartData.cartData);
  const isSubmitFormOpen = useSelector(
    (state) => state.cartData.isSubmitFormOpen
  );

  const cartToggleHandler = () => {
    dispatch(cartDataActions.toggleIsCartOpen("false"));
    dispatch(cartDataActions.toggleIsSubmitFormOpen("false"));
  };

  return (
    <>
      <div className="cartControl">
        <h1 className="cartTitle">{props.title}</h1>
        <CancelIcon className="closeButton" onClick={cartToggleHandler} />
      </div>
      {cartItems.length > 0 && !isSubmitFormOpen && (
        <div className="cartItemsHeader">
          <h4>Products</h4>
          <h4>Price</h4>
        </div>
      )}
    </>
  );
};

export default CartHeader;
