import footerlogo from "/footerlogo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={footerlogo} alt="logo kasa" />
      </div>
      <div className="rights">
        <p> © 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
