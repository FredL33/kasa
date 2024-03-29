import logo from "/logo.svg";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo kasa" />

      <ul className="navlinks">
        <NavLink to="/">
          <li className="acceuil">Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li className="about">A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
