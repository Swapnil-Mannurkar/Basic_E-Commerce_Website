import React from "react";
import "./Modal.css";
import { cartDataActions } from "../../assests/store/cartData";
import { useDispatch } from "react-redux";

const Modal = (props) => {
  const dispatch = useDispatch();

  const cartToggleHandler = () => {
    dispatch(cartDataActions.toggleIsCartOpen("false"));
    dispatch(cartDataActions.toggleIsSubmitFormOpen("false"));
  };

  return (
    <>
      <div className="cartModal" onClick={cartToggleHandler}></div>
      <div className="cartContainer">{props.children}</div>
    </>
  );
};

export default Modal;
