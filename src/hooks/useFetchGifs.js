import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //O SE PUEDE HACER CON UN ASYNC AWAIT Y LUEGO LLAMAMOS LA FUNCION EN EL USEEFFECT
  const getImages = async () => {
    //traemos las imagenes de la categoria
    const newImages = await getGifs(category);
    //y las seteamos en el estado para actualizarlo
    setImages(newImages);
    //y cambiamos el estado de loading
    setIsLoading(false);
  };

  useEffect(() => {
    //traemos las imagenes de la categoria
    getImages();
    //SE PUEDE HACER CON UN THEN
    //getGifs(category).then((newImages) => setImages(newImages));
  }, []);

  return {
    images,
    isLoading,
  };
};
