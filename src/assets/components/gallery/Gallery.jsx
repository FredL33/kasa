import useFetch from "./usefetch";

function Gallery() {
  const { data, loading, error } = useFetch("/logements.json");
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(data);
  return <div></div>;
}

export default Gallery;
