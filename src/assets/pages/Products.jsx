import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../components/gallery/usefetch";
import { useEffect } from "react";
import SlideShow from "../components/carrousel/Carrousel";

const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("/logements.json");
  const appt = data?.find((elem) => elem.id === id);

  useEffect(() => {
    if (data && (error || !data.find((elem) => elem.id === id))) {
      navigate("/error");
    }
  }, [data, error, id, navigate]);

  if (loading) return <div>Loading ...</div>;
  if (error || !appt) return null; // Ajouté pour prévenir le rendu du composant si une redirection est en cours
  console.log(appt);
  return (
    <div>
      <Header />
      <div>
        <SlideShow appt={appt.pictures} />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
