import { Link } from "react-router-dom";
import useFetch from "./usefetch";

function Gallery() {
  const { data, loading, error } = useFetch("/logements.json");
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(data);
  return (
    <div className="grid-container">
      <ul className="gallery">
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/appartement/${item.id}`}>
              <div className="item">
                <img src={item.cover} alt="appartement" />
                <h3 className="title">{item.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
