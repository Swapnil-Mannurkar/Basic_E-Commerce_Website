import "./Cart.css";
import CartItemCard from "./CartItemCard";
import CartHeader from "../ui/Header";
import CartFooter from "../ui/Footer";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { useDispatch, useSelector } from "react-redux";
import { cartDataActions } from "../../store/cartData";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartData.cartData);

  const cartToggleHandler = () => {
    dispatch(cartDataActions.toggleIsCartOpen());
  };

  return (
    <>
      <div className="cartModal" onClick={cartToggleHandler}></div>
      <div className="cartContainer">
        <CartHeader title={"Shopping Cart"} type="cart" />
        <div className="cartItemsContainer">
          {cartItems.map((item, index) => (
            <CartItemCard
              key={index}
              id={item.id}
              img={item.img}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
          {cartItems.length > 0 && (
            <div className="cartItemsContainerBefore"></div>
          )}
        </div>
        {cartItems.length < 1 && (
          <div className="noItemsFoundContainer">
            <ProductionQuantityLimitsIcon
              className="noItemsFoundIcon"
              style={{ fontSize: "5rem" }}
            />
            <p className="noItemsFoundText">
              No items found! Please add some items
            </p>
          </div>
        )}
        {cartItems.length > 0 && <CartFooter type="cart"/>}
      </div>
    </>
  );
};

export default Cart;
