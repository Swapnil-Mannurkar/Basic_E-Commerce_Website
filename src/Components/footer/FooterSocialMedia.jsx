import "./FooterSocialMedia.css";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import Link from "@mui/material/Link";

const FooterSocialMedia = () => {
  return (
    <div className="socialMediaContainer">
      <Link href="/" className="socialMediaIcon">
        <div className="socialMediaIconContainer">
          <Facebook className="SocailMediaIcon"/>
        </div>
      </Link>
      <Link href="/" className="socialMediaIcon">
        <div className="socialMediaIconContainer">
          <Instagram className="SocailMediaIcon"/>
        </div>
      </Link>
      <Link href="/" className="socialMediaIcon">
        <div className="socialMediaIconContainer">
          <Twitter className="SocailMediaIcon"/>
        </div>
      </Link>
      <Link href="/" className="socialMediaIcon">
        <div className="socialMediaIconContainer">
          <YouTube className="SocailMediaIcon"/>
        </div>
      </Link>
    </div>
  );
};

export default FooterSocialMedia;
