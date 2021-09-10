import React from 'react';
import Ingredients from './Ingredients.js'
import IngredientInput from './IngredientInput.js';
import TotalCalories from './TotalCalories.js'

class Calories extends React.Component {

    render(){
        return(
            <div>
                <h2>Ingredient List Calorie Counter</h2>
                
                <IngredientInput />

                <ul className="list-group">
                    <Ingredients amount={21}/>
                </ul>

                <TotalCalories />
    
            </div>
        )
    }
}

export default Calories;