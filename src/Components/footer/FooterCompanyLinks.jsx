import "./FooterCompanyLinks.css";
import Link from "@mui/material/Link";

const FooterCompanyLinks = () => {
  return (
    <div className="companyLink">
      <ul style={{ listStyle: "none" }}>
        <Link href="/">Home</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">My Account</Link>
      </ul>
    </div>
  );
};

export default FooterCompanyLinks;
