import React from 'react'

const Recipe = props => {
  // destructure props to just get name, image, intructions, ingredients
  const { name, imagelink, instructions, ingredients } = props;

  return (
    <div className='recipe'>
      <div className='recipeName'>{name}</div>
      <div>
        <img className='recipeImg' src={imagelink} />
      </div>
      <div>
        <div className='instructions'>
        <strong>Instructions:</strong>
        <br/>
        {instructions}
        </div>
        <div className='ingredients'>
        <strong>Ingredients:</strong>
        <br/>
        {ingredients}
        </div>
      </div>
    </div>
  )
}

export default Recipe;