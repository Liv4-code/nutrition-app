import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class Ingredients extends React.Component {
    constructor(props) {
        super(props);

        this.itemCalRef = React.createRef();
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
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "red" }}
                            onClick={() => this.props.deleteIngredient(i)}
                        />
                    </li>
                );
            });

        return (
            <div className="list-items">
                {this.props.amount.length !== 0 ? newIngredient() : null}
            </div>
        );
    }
}

export default Ingredients;
