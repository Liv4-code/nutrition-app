import React from "react";
import TotalCalories from "./TotalCalories";

class Ingredients extends React.Component {
    state = { itemCalories: [] };

    constructor(props) {
        super(props);

        this.itemCalRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.amount !== this.props.amount) {
            this.setState({
                itemCalories: Number(this.itemCalRef.current.innerHTML),
            });
        }
    }

    render() {
        const newIngredient = () =>
            this.props.amount.map((amount, i) => {
                return (
                    <li
                        key={i}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        {JSON.stringify(amount.item_name)}
                        <span
                            ref={this.itemCalRef}
                            className="badge bg-primary rounded-pill"
                        >
                            {amount.nf_calories}
                        </span>
                    </li>
                );
            });

        return (
            <div className="list-items">
                {this.props.amount.length !== 0 ? newIngredient() : null}
                <TotalCalories total={this.state.itemCalories} />
            </div>
        );
    }
}

export default Ingredients;
