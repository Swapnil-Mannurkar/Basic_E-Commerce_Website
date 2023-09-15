import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./assests/store/index";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthContextProvider } from "./assests/store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="617541586426-fgnbfu1g5fdf8t6r0kavnfb7l08e92u7.apps.googleusercontent.com">
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </GoogleOAuthProvider>
);
