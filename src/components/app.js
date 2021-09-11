import React from 'react';
import Calories from './calories.js';

const App = () => {

        return(
            <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                <h1>Nutri-Fit Assistant</h1>    
                <Calories />
            </div>
        );
}

export default App;