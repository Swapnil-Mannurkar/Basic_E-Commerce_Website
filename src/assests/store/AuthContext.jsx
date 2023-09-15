import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

const AuthContext = React.createContext({
  isLoggedIn: false,
  isDisplayDropdown: false,
  onLogout: () => {},
  onLogin: () => {},
  onDisplayDropdown: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isDisplayDropdown, setIsDisplayDropdown] = useState(false);
  const [displayNavbar, setDisplayNavbar] = useState(false);

  useEffect(() => {
    const storedUserLoggedInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInformation) setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    if (user) {
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setProfile(data);
          localStorage.setItem("name", data.given_name);
          localStorage.setItem("picture", data.picture);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const loginHandler = () => {
    login();
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("name");
    localStorage.removeItem("picture");
    setIsLoggedIn(false);
    setIsDisplayDropdown(false);
    googleLogout();
    setProfile(null);
  };

  const displayDropdownHandler = () => {
    setIsDisplayDropdown(!isDisplayDropdown);
  };

  const navbarToggleHandler = () => {
    setDisplayNavbar(!displayNavbar);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isDisplayDropdown: isDisplayDropdown,
        profile: profile,
        displayNavbar: displayNavbar,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onDisplayDropdown: displayDropdownHandler,
        onClickNavbar: navbarToggleHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
