import React from 'react';
import '../index.css';
import Calories from './calories.js';

const App = () => {

        return(
            <div className="component-container">
                <h1>Nutri-Fit Assistant</h1>    
                <Calories />
            </div>
        );
}

export default App;