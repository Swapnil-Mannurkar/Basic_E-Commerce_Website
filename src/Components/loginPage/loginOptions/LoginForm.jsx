import Button from "../../ui/Button";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <form action="" className="loginForm">
      <label htmlFor="emailAddress">Email Address</label>
      <input
        type="email"
        className="loginFormInput"
        placeholder="johndoe@gmail.com"
      />
      <label htmlFor="password" style={{ marginTop: "10px" }}>
        Password
      </label>
      <input
        type="password"
        className="loginFormInput"
        placeholder="johndoe@2000"
      />
      <a href="/" className="forgotPasswordLink" style={{ margin: "5px 0" }}>
        Forgot password?
      </a>
      <Button
        backgroundColor={"#000000"}
        text={"Sign In"}
        height={`${window.innerWidth < 960 ? "1.75rem" : "2.5rem"}`}
        width={`${window.innerWidth < 960 ? "40%" : "100%"}`}
        textColor={"#ffffff"}
        fontSize={`${window.innerWidth < 960 ? "12px" : "16px"}`}
        fontWeight={"700"}
      />
    </form>
  );
};

export default LoginForm;
