import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/home.css";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="banner">
        <h2>Chez vous, partout ailleurs</h2>
      </div>
      <div className="homes"></div>
      <Footer />
    </div>
  );
};

export default Home;
