import { ShoppingCart } from "@mui/icons-material";
import "./NavbarCart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartDataActions } from "../../store/cartData";

const NavbarCart = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector((state) => state.cartData.cartItemCount);

  const cartToggleHandler = () => {
    dispatch(cartDataActions.toggleIsCartOpen());
  };

  return (
    <div className="navbarCart" onClick={cartToggleHandler}>
      <div style={{ fontSize: "1.1rem" }}>Cart</div>
      <div>
        <ShoppingCart style={{ fontSize: "24px" }} />
        {cartItemCount > 0 && (
          <span className="itemNumberInCart">{cartItemCount}</span>
        )}
      </div>
    </div>
  );
};

export default NavbarCart;
