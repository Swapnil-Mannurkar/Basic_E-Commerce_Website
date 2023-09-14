import "./Footer.css";
import Grid from "@mui/material/Unstable_Grid2";
import FooterCompanyLinks from "./FooterCompanyLinks";
import FooterProductLinks from "./FooterProductLinks";
import FooterSocialMedia from "./FooterSocialMedia";

const Footer = () => {
  let windowSize = window.innerWidth;
  let laptopScreen = windowSize > 850;
  let padScreen = windowSize > 480 && windowSize < 850;

  return (
    <>
      <div className="footerContainer">
        <Grid
          container
          sx={{ flexGrow: 1 }}
          style={
            laptopScreen
              ? {}
              : padScreen
              ? {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  textAlign: "center",
                }
              : {
                  display: "grid",
                  gridTemplateColumns: "1.25fr 1.25fr 0.5fr",
                  textAlign: "center",
                }
          }
        >
          {laptopScreen && <Grid xs={1} />}
          <Grid xs={laptopScreen && 2}>
            <FooterCompanyLinks />
          </Grid>
          <Grid xs={laptopScreen && 2}>
            <FooterProductLinks />
          </Grid>
          {laptopScreen && <Grid xs={3.6}></Grid>}
          <Grid xs={laptopScreen && 2}>
            <FooterSocialMedia />
          </Grid>
          {laptopScreen && <Grid xs={1.4} />}
        </Grid>
      </div>
      <div className="copyrightContainer">
        Copyright ©2023 All rights reserved <br /> This template is made by
        Swapnil Mannurkar 🙂
      </div>
    </>
  );
};

export default Footer;
