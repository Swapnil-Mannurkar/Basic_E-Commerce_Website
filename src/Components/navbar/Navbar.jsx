import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./Navbar.css";
import NavbarLogo from "./NavbarLogo";
import NavbarSearch from "./NavbarSearch";
import NavbarLocation from "./NavbarLocation";
import NavbarCart from "./NavbarCart";
import NavbarProfile from "./NavbarProfile";

export default function Navbar() {
  let windowSize = window.innerWidth;
  let laptopScreen = windowSize > 1200;
  let padScreen = windowSize > 480 && windowSize < 850;
  let smallLaptop = windowSize > 850 && windowSize < 1200;

  return (
    <Box sx={{ flexGrow: 1 }} className="navbarContainer">
      <Grid container style={{ justifyContent: "center" }}>
        <Grid
          xs={laptopScreen ? 1 : padScreen ? 1 : 2}
          className="navbarItem NavbarLogo"
        >
          <NavbarLogo />
        </Grid>
        {(laptopScreen || padScreen || smallLaptop) && (
          <Grid
            xs={padScreen ? 3 : smallLaptop ? 2 : 1.5}
            className="navbarItem NavbarLocation"
          >
            <NavbarLocation />
          </Grid>
        )}
        <Grid
          xs={laptopScreen ? 4.2 : padScreen ? 4.2 : smallLaptop ? 4 : 4.7}
          className="navbarItem NavbarSearch"
        >
          <NavbarSearch />
        </Grid>
        {(laptopScreen || smallLaptop) && (
          <Grid
            xs={smallLaptop ? 1.3 : 1}
            className="navbarItem NavbarReturnsOrders"
          >
            <div>Returns</div>
            <div>& Orders</div>
          </Grid>
        )}
        <Grid
          xs={laptopScreen ? 1 : padScreen ? 1.6 : smallLaptop ? 1 : undefined}
          className="navbarItem NavbarCart"
        >
          <NavbarCart />
        </Grid>
        <Grid
          xs={laptopScreen ? 1 : padScreen ? 1.5 : smallLaptop ? 1.6 : 2.5}
          className="navbarItem NavbarProfile"
        >
          <NavbarProfile />
        </Grid>
      </Grid>
    </Box>
  );
}
