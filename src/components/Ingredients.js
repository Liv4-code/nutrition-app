import React from "react";
import DeleteButton from "./DeleteButton";
import TotalCalories from "./TotalCalories";

class Ingredients extends React.Component {
    state = { itemCalories: null, display: "flex" };

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

    // if element target was clicked then update state to display none

    deleteFunc = (e) => {
        console.log(e);
        this.setState({ display: "none" });
    };

    render() {
        const newIngredient = () =>
            this.props.amount.map((amount, i) => {
                return (
                    <li
                        key={i}
                        className="list-group-item justify-content-between align-items-center"
                        style={{ display: `${this.state.display}` }}
                        onClick={this.deleteFunc}
                    >
                        {JSON.stringify(amount.item_name)}
                        <span
                            ref={this.itemCalRef}
                            className="badge bg-primary rounded-pill"
                        >
                            {amount.nf_calories}
                        </span>
                        <DeleteButton />
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
