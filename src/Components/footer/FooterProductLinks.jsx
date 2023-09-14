import "./FooterProductLinks.css";
import Link from "@mui/material/Link";

const FooterProductLinks = () => {
  return (
    <div className="productLink">
      <ul style={{ listStyle: "none" }}>
        <Link href="/">Polo T-Shirts</Link>
        <Link href="/">Anime T-Shirts</Link>
        <Link href="/">V Neck T-Shirts</Link>
        <Link href="/">Round Neck T-Shirts</Link>
      </ul>
    </div>
  );
};

export default FooterProductLinks;
