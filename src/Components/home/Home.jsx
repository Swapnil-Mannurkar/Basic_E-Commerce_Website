import React, { useContext } from "react";
import AuthContext from "../../assests/store/AuthContext";
import Index from "./Index";
import Login from "../loginPage/Login";

const Home = () => {
  const context = useContext(AuthContext);

  return (
    <>
      {context.isLoggedIn && <Index />}
      {!context.isLoggedIn && <Login />}
    </>
  );
};

export default Home;
