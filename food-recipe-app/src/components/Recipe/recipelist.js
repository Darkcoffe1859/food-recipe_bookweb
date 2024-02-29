import React from 'react';
import './RecipeList.scss';

const RecipeList = () => {
  // Assuming you get recipes from some other source or props
  const recipes = []; // Replace this with your data source

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <h3>{recipe.title}</h3>
          {/* Placeholder for the image */}
          <div className="placeholder-image"></div>
          <p>{recipe.description}</p>
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;


