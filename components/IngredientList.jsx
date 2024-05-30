// src/components/IngredientList.jsx
import React from 'react';
import Ingredient from './Ingredient/Ingredient.jsx';

const IngredientList = ({ addToBurger, availableIngredients}) => {
//   const availableIngredients = [
//     { name: "Lettuce", color: "green" },
//     { name: "Tomato", color: "red" },
//     { name: "Cheese", color: "yellow" },
//     { name: "Meat", color: "brown" }
//   ];
return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onClick={addToBurger}
          actionType="add"
        />
      ))}
    </ul>
  );
};


export default IngredientList;
