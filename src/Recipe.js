import { useState } from "react";

import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  const [isBig, setIsBig] = useState(false);

  const toggleImageSize = () => {
    setIsBig(!isBig);
  };
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient,index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img
        className={isBig ? style : style.image}
        src={image}
        onClick={toggleImageSize}
        alt={title}
      />
    </div>
  );
};

export default Recipe;
