import React from "react";

class TotalCalories extends React.Component {
    // state = { totalCalories: null };

    componentDidUpdate(prevProps, nextState) {
        console.log(prevProps, nextState);
    }

    // Call a function for when output is updated with the total prop from Ingredients.
    // The function rerenders the component once it receives this prop.
    // We want to take the total prop passed from Ingredient parent and pass it into an array.
    // Get sum of all items (numbers) in that array

    render() {
        // console.log(this.props.total);

        return (
            <div style={{ fontSize: "20px", padding: "20px" }}>
                <label htmlFor="total-calories">Total Calories:</label>
                <output
                    style={{ padding: "10px" }}
                    name="total-calories"
                    htmlFor="total-calories"
                >
                    {typeof this.props.total}
                </output>
            </div>
        );
    }
}

export default TotalCalories;
