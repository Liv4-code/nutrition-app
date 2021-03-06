import React from "react";
import "../index.css";

class IngredientInput extends React.Component {
    state = { text: "" };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSearchSubmit(this.state.text);
        this.setState({ text: "" });
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="ui container">
                    <div className="ui input">
                        <input
                            type="text"
                            placeholder="Name of ingredient"
                            name="ingredient-input"
                            value={this.state.text}
                            onChange={(e) =>
                                this.setState({ text: e.target.value })
                            }
                        />
                    </div>
                    <button className="ui button" type="submit">
                        Add
                    </button>
                </div>
            </form>
        );
    }
}

export default IngredientInput;
