import { Link } from "@mui/material";
import "./NavbarProfile.css";

const NavbarProfile = () => {
  const profileImg = localStorage.getItem("picture");
  return (
    <Link>
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
