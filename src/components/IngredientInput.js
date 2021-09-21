import React from 'react';
import '../index.css';

class IngredientInput extends React.Component {
    state = {text: ''};

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.formSubmitted(this.state.text);
    }
    
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="ui container">
                <div className="ui input">
                    <input 
                    type="text"
                    name="ingredient-input"
                    value={this.state.text}
                    onChange={e => this.setState({text: e.target.value})}
                    />
                </div>
                    <button className="ui button" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default IngredientInput;