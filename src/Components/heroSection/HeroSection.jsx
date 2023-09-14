import "./HeroSection.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";

const HeroSection = () => {
  const buttonStyle = {
    color: "black",
    borderColor: "black",
    marginTop: "15px",
    fontSize: "16px",
    fontFamily: "Lato",
  };

  return (
    <Grid container className="heroSectionContainer">
      <Grid xs={6.8} className="heroSectionLeftContainer">
        <div className="heroSectionContentContainer">
          <h1 className="heroSectionHeading">CUSTOMIZED PRINTED TEES</h1>
          <div className="heroSectionContent">
            Nam at congue diam etiam erat lectus, finibus eget commodo quis,
            congue diam etiam erat lectus.
          </div>
          <Button variant="outlined" style={buttonStyle}>
            EXPLORE PRODUCTS
          </Button>
        </div>
      </Grid>
      <Grid xs={5} className="heroSectionRightContainer">
        <img
          className="heroSectionImage"
          src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2020/02/boy-t2.png"
          alt="heroImage"
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
