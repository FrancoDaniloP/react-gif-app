import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length < 1) {
      setError(true);
      return;
    }
    setError(false);

    //setCategories([inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          onChange={handleChange}
          value={inputValue}
        />
      </form>
      {error ? <p className="error">Error: Ingrese un valor válido</p> : null}
    </div>
  );
};
