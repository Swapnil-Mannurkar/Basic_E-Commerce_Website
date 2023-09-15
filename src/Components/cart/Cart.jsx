import "./Cart.css";
import CartItemCard from "./CartItemCard";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartData.cartData);

  return (
    <>
      <Modal>
        <Header title={"Shopping Cart"} type="cart" />
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
        {cartItems.length > 0 && (
          <Footer type="cart" submit={"ORDER"} cancel={"CANCEL"} />
        )}
      </Modal>
    </>
  );
};

export default Cart;
