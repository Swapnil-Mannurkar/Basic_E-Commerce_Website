import "./ProductCard.css";
import { Button } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { cartDataActions } from "../../store/cartData";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    const item = {
      id: props.id,
      img: props.img,
      price: props.price,
      quantity: 1,
    };
    dispatch(cartDataActions.addItem(item));
  };

  return (
    <div className="cardMainContainer">
      <div className="cardContainer">
        <img src={props.img} alt="product" className="cardImage" />
        <h2 className="cardTitle">{props.title}</h2>
        <div className="cardDetailContainer">
          <p className="cardPrice">
            ₹ {props.price}{" "}
            <span className="mrp">
              M.R.P <span className="mrpPrice">{props.mrp}</span>
            </span>
          </p>
          <Button
            variant="outlined"
            startIcon={<ShoppingCartRounded style={{ fontSize: "18px" }} />}
            className="addToCartButton"
            onClick={addItemHandler}
          >
            Add item
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
