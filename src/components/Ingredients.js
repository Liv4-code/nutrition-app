import React from 'react'

const Ingredients = (props) => {
  console.log(props.amount.length);

  const renderIngredient = () => {
      return <li className="list-group-item d-flex justify-content-between align-items-center">
      {JSON.stringify(props.amount.item_name)}
      <span className="badge bg-primary rounded-pill">{props.amount.nf_calories}</span>
      </li>
  }

  return(
      <div className="list-item">
        {props.amount.length !== 0 ? renderIngredient() : null}
      </div>  
    )
}

export default Ingredients;