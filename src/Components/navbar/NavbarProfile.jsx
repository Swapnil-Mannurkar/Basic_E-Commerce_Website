import { Link } from "@mui/material";
import "./NavbarProfile.css";

const NavbarProfile = () => {
  return (
    <Link>
      <img className="profilePicture"
        src="https://swapnil-mannurkar.github.io/static/media/Swapnil.b5363dea74c9c625b4b7.png"
        width="35px"
        alt="profile"
      />
    </Link>
  );
};

export default NavbarProfile;
