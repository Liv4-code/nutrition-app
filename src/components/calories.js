import React from 'react';
import '../index.css';
import Ingredients from './Ingredients.js'
import IngredientInput from './IngredientInput.js';

class Calories extends React.Component {

    state = {nutritionData: []}

    onSearchSubmit = text => {
        fetch(`https://api.nutritionix.com/v1_1/search/${text}?results=0:25&fields=item_name,brand_name,nf_total_carbohydrate,nf_total_protein,nf_total_fat,nf_trans_fatty_acid,nf_sugars,nf_calories&appId=8fd13f38&appKey=8e684402ce7dbb6b19cd6d488ab1c130`)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            this.setState({nutritionData: this.state.nutritionData.concat(data.hits[0].fields)});
        })
        .catch(err => {
            console.log(err);
        });
    }

    render(){
        return(
            <div className="component-container">
                <h2>Ingredient List Calorie Counter</h2>
                
                <IngredientInput formSubmitted={this.onSearchSubmit}/>

                <ul className="list-group">
                    <Ingredients amount={this.state.nutritionData}/>
                </ul>

            </div>
        )
    }
}

export default Calories;