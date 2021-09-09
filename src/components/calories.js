import React from 'react';
import Ingredients from './Ingredients.js'

class Calories extends React.Component {
    render(){
        return(
            <div>
    
                <h2>Ingredient List Calorie Counter</h2>
    
                <div className="ui container">
                    <div className="ui input">
                        <input type="text" name="ingredient-input"></input>
                    </div>
                            
                        <button className="ui button" type="submit">Submit</button>
                </div>
    
    
                <ul class="list-group">
                    <Ingredients amount={21}/>
                </ul>
    
            </div>
        )
    }

}

export default Calories;