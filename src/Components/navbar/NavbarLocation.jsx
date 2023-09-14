import { Link } from "@mui/material";
import "./NavbarLocation.css";
import { LocationOnOutlined } from "@mui/icons-material";

const NavbarLocation = () => {
  return (
    <Link className="NavbarLocationContainer">
      <LocationOnOutlined style={{ fontSize: "28px" }} />
      <div style={{ fontSize: "0.8rem" }}>
        <p>Deliver to Swapnil</p>
        <p>Belgaum 590016</p>
      </div>
    </Link>
  );
};

export default NavbarLocation;
