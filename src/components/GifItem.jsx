import { useFetchGifs } from "../hooks/useFetchGifs";
export const GifItem = ({ title, url, category }) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <div className="card">
      {isLoading && <h5>Loading...</h5>}
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
