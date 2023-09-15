import React, { useState, useEffect } from "react";
import "./Logo.css";

const Logo = (props) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, [screenSize]);

  useEffect(
    () => {
      const animationTimeout = setTimeout(() => {
        setAnimationComplete(true);
        props.onAnimationComplete();
      }, 2000);

      return () => clearTimeout(animationTimeout);
    }, // eslint-disable-next-line
    []
  );

  const logoName = {
    animation: "fadeInAnimation ease 3s",
  };

  const logoContainer = {
    transition: "all 0.5s ease",
    height: `${animationComplete ? "20vh" : "100vh"}`,
  };

  return (
    <div className="logoContainer" style={logoContainer}>
      <p className="logoName" style={logoName}>
        E-Commerce
      </p>
    </div>
  );
};

export default Logo;
