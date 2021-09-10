import React from 'react'

class IngredientInput extends React.Component {
    state = {text: ''};

    onFormSubmit(e){
        e.preventDefault();
        console.log(this.state.text);
    }
    
    render(){
        return(
            <form onSubmit={(e) => this.onFormSubmit(e)}>
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