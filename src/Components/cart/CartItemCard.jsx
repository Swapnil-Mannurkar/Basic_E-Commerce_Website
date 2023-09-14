import React from "react";
import "./CartItemCard.css";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { cartDataActions } from "../../store/cartData";

const CartItemCard = (props) => {
  const dispatch = useDispatch();

  const clickHandler = (action) => {
    const item = {
      id: props.id,
      title: props.title,
      img: props.img,
      price: props.price,
      quantity: props.quantity,
    };
    if (action === "INCREASE") {
      dispatch(cartDataActions.addItem(item));
    } else if (action === "REMOVE") {
      dispatch(cartDataActions.removeItem(item));
    } else if (action === "DECREASE") {
      dispatch(cartDataActions.decreaseItem(item));
    }
  };

  return (
    <div className="cartItemContainer">
      <div className="cartItem">
        <div className="cartItemImage">
          <img src={props.img} className="itemImage" alt="product" />
          <div className="itemQuantity">x {props.quantity}</div>
        </div>
        <div className="cartItemDetails">
          <div className="cartItemControls">
            <Button
              variant="outlined"
              className="cartButton"
              onClick={() => clickHandler("INCREASE")}
            >
              +
            </Button>
            <Button
              variant="outlined"
              className="cartButton"
              onClick={() => clickHandler("DECREASE")}
            >
              -
            </Button>
            <Button className="cartButton">
              <Delete
                style={{ fontSize: "20px", color: "red" }}
                onClick={() => clickHandler("REMOVE")}
              />
            </Button>
          </div>
          <div className="cartItemPrice">
            ₹ {Number(props.quantity) * Number(props.price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
