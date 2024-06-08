import React from "react";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  return (
    <a
      href={`https://www.themealdb.com/meal/${idMeal}`}
      target="_blank"
      rel="noopener noreferrer"
      className="card"  
    >
      <img
        src={strMealThumb}
        alt={strMeal}
        className="card-image"
      />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
      </div>
    </a>
  );
};

export default RecipeCard;
