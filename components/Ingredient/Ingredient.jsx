import React from 'react';

const Ingredient = ({ ingredient, onClick, actionType }) => {
  const buttonLabel = actionType === 'add' ? '+' : 'X';
  const buttonAction = () => onClick(ingredient, actionType);

  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={buttonAction}>{buttonLabel}</button>
    </li>
  );
};

export default Ingredient;
