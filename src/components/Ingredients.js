import React from 'react'

const Ingredients = (props) => {

    const newIngredient = () => props.amount.map(amount => {
      return <li className="list-group-item d-flex justify-content-between align-items-center">
      {JSON.stringify(amount.item_name)}
      <span className="badge bg-primary rounded-pill">{amount.nf_calories}</span>
      </li>
    });

  return(
      <div className="list-items">
        {props.amount.length !== 0 ? newIngredient() : null}
      </div>  
    )
}

export default Ingredients;