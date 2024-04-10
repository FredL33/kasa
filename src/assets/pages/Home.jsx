import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/home.css";
import Gallery from "../components/gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="banner">
        <h2>Chez vous, partout ailleurs</h2>
      </div>

      <Gallery />

      <Footer />
    </div>
  );
};

export default Home;
