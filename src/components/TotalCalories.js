import React from 'react';

const TotalCalories = (props) => {

    return(
        <div style={{fontSize: '20px', padding: '20px'}}>
            <label htmlFor="total-calories">Total Calories:</label>
            <output name="total-calories" htmlFor="total-calories">{props.total}</output>
        </div>
    )
}

export default TotalCalories