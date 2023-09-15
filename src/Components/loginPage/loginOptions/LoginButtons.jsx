import Button from "../../ui/Button";
import "./LoginButtons.css";

const LoginButtons = (props) => {
  return (
    <div className="loginButtonsContainer">
      <Button
        backgroundColor={"#ffffff"}
        width={`${window.innerWidth < 960 ? "165px" : "180px"}`}
        height={`${window.innerWidth < 960 ? "40px" : "30px"}`}
        text={"Sign in with Google"}
        type={"google"}
        textColor={"#858585"}
        fontSize={"12px"}
        fontWeight={"400"}
        onClick={props.onClick}
      />
      <Button
        backgroundColor={"#ffffff"}
        width={`${window.innerWidth < 960 ? "165px" : "180px"}`}
        height={`${window.innerWidth < 960 ? "40px" : "30px"}`}
        text={"Sign in with Apple"}
        type={"apple"}
        textColor={"#858585"}
        fontSize={"12px"}
        fontWeight={"400"}
      />
    </div>
  );
};

export default LoginButtons;
