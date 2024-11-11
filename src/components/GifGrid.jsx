import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h5>Loading...</h5>}

      <div className="card-grid">
        {images.map(({ id, title, url }) => {
          return <GifItem key={id} id={id} title={title} url={url} />;
        })}
      </div>
    </>
  );
};
