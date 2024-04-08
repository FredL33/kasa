import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { NavLink } from "react-router-dom";
import "../styles/error.css";
const Error = () => {
  return (
    <div>
      <Header />
      <h2 className="code">404</h2>
      <h4>Oups! La page que vous demandez n'existe pas</h4>
      <NavLink to="/"> Retouner sur la page d'accueil</NavLink>
      <Footer />
    </div>
  );
};

export default Error;
