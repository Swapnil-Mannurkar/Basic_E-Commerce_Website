import { Link } from "@mui/material";
import "./NavbarProfile.css";
import { useContext } from "react";
import AuthContext from "../../assests/store/AuthContext";

const NavbarProfile = () => {
  const profileImg = localStorage.getItem("picture");
  const context = useContext(AuthContext);

  const profileImgClickHandler = () => {
    context.onDisplayDropdown();
  };

  return (
    <Link onClick={profileImgClickHandler}>
      <img
        className="profilePicture"
        src={profileImg}
        width="35px"
        alt="profile"
      />
    </Link>
  );
};

export default NavbarProfile;
