import React from "react";

class TotalCalories extends React.Component {
    state = { totalCalories: 0 };

    componentDidUpdate(prevProps) {
        if (prevProps.total !== this.props.total) {
            this.setState({
                totalCalories: this.state.totalCalories + this.props.total,
            });
        }
    }

    render() {
        return (
            <div style={{ fontSize: "20px", padding: "20px" }}>
                <label htmlFor="total-calories">Total Calories:</label>
                <output
                    style={{ padding: "10px" }}
                    name="total-calories"
                    htmlFor="total-calories"
                >
                    {this.state.totalCalories}
                </output>
            </div>
        );
    }
}

export default TotalCalories;
