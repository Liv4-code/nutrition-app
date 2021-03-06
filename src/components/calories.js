import React from "react";
import "../index.css";
import Ingredients from "./Ingredients.js";
import IngredientInput from "./IngredientInput.js";

class Calories extends React.Component {
    state = { nutritionData: [] };

    onSearchSubmit = async (text) => {
        try {
            const res = await fetch(
                `https://api.nutritionix.com/v1_1/search/${text}?results=0:25&fields=item_name,brand_name,nf_total_carbohydrate,nf_total_protein,nf_total_fat,nf_trans_fatty_acid,nf_sugars,nf_calories&appId=8fd13f38&appKey=8e684402ce7dbb6b19cd6d488ab1c130`
            );
            const data = await res.json();
            const newNutritionData = data.hits[0].fields;
            this.setState({
                nutritionData:
                    this.state.nutritionData.concat(newNutritionData),
            });
        } catch (e) {
            console.log(e);
        }
    };

    deleteIngredient = (ingredient) => {
        let filteredArray = this.state.nutritionData.filter(
            (item, index) => index !== ingredient
        );
        this.setState({ nutritionData: filteredArray });
    };

    totalCalories = (nutritionData) => {
        const total = nutritionData
            .map((item) => item.nf_calories)
            .reduce((prevItem, currentItem) => prevItem + currentItem, 0);
        return total;
    };

    render() {
        return (
            <div className="component-container">
                <h2>Ingredient List Calorie Counter</h2>
                <IngredientInput onSearchSubmit={this.onSearchSubmit} />
                <ul className="list-group">
                    <Ingredients
                        amount={this.state.nutritionData}
                        deleteIngredient={this.deleteIngredient}
                    />
                </ul>
                <div style={{ fontSize: "20px", padding: "20px" }}>
                    <label htmlFor="total-calories">Total Calories:</label>
                    <output
                        style={{ padding: "10px" }}
                        name="total-calories"
                        htmlFor="total-calories"
                    >
                        {this.totalCalories(this.state.nutritionData)}
                    </output>
                </div>
            </div>
        );
    }
}

export default Calories;
