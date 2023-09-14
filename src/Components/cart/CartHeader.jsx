import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { cartDataActions } from "../../store/cartData";
import "./CartHeader.css";

const CartHeader = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartData.cartData);

  const cartToggleHandler = () => {
    dispatch(cartDataActions.toggleIsCartOpen());
  };

  return (
    <>
      <div className="cartControl">
        <h1 className="cartTitle">Shopping Cart</h1>
        <CancelIcon className="closeButton" onClick={cartToggleHandler} />
      </div>
      {cartItems.length > 0 && (
        <div className="cartItemsHeader">
          <h4>Products</h4>
          <h4>Price</h4>
        </div>
      )}
    </>
  );
};

export default CartHeader;
