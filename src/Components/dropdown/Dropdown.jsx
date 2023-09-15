import React, { useContext } from "react";
import "./Dropdown.css";
import AuthContext from "../../assests/store/AuthContext";

const Modal = () => {
  const context = useContext(AuthContext);
  const handleLogout = () => {
    context.onLogout();
  };

  return (
    <>
      <div className="modal-container" onClick={context.onDisplayDropdown} />
      <div className="modal-content">
        <ul className="modal-list">
          <li style={{ fontWeight: 700 }}>
            Hi {localStorage.getItem("name")}!
          </li>
          <hr />
          <li>
            <a href="/">Profile</a>
          </li>
          <hr />
          <li>
            <a href="/">Notification</a>
          </li>
          <hr />
          <li>
            <a href="/">Settings</a>
          </li>
          <hr />
          <li>
            <a href="/">Switch account</a>
          </li>
          <hr />
        </ul>
        <button
          onClick={handleLogout}
          style={{ marginTop: "10px" }}
          className="logoutButton"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Modal;
