import React from 'react'

const Ingredients = (props) => {
    return(
        <div>
                    
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">{props.amount}</span>
  </li>
  
        </div>

        
    )
}

export default Ingredients;