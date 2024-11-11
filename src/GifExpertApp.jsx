import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { getGifs } from "./helpers/getGifs";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  const API_KEY = "cBY5GUu05UymhQkxcnxaJJH660H4iwKC";

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      setError(true);
      return;
    }
    setError(false);
    console.log(newCategory);
    setCategories([newCategory]);
  };

  const cleanCategory = (e) => {
    e.preventDefault();
    setCategories([]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        // categories={categories}
        onNewCategory={addCategory}
      />
      {error ? <p className="error">Error: ese nombre ya existe</p> : null}
      {/* Listado de Gif */}
      <button onClick={cleanCategory}>Limpiar</button>
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
