import React from 'react';
import Ingredients from './Ingredients.js'
import IngredientInput from './IngredientInput.js';
import TotalCalories from './TotalCalories.js'

class Calories extends React.Component {

    onSearchSubmit(text){
        console.log(text);

        fetch(`https://api.nutritionix.com/v1_1/search/${text}?results=0:25&fields=item_name,brand_name,nf_total_carbohydrate,nf_total_protein,nf_total_fat,nf_trans_fatty_acid,nf_sugars,nf_calories&appId=8fd13f38&appKey=8e684402ce7dbb6b19cd6d488ab1c130`)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data.hits);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render(){
        return(
            <div>
                <h2>Ingredient List Calorie Counter</h2>
                
                <IngredientInput formSubmitted={this.onSearchSubmit}/>

                <ul className="list-group">
                    <Ingredients amount={21}/>
                </ul>

                <TotalCalories />
    
            </div>
        )
    }
}

export default Calories;