import React from 'react';
import TotalCalories from './TotalCalories';

class Ingredients extends React.Component {

  state = {total: null};

  constructor(props) {
    super(props);

    this.itemCalRef = React.createRef();
  }

  componentDidUpdate = () => {
    console.log(this.itemCalRef);
  }

  //Receive whatever value that is returned and append
  // it to an array in state.
  // Pass the state down to TotalCalories as a prop

  render(){

    const newIngredient = () => this.props.amount.map(amount => {
      return <li className="list-group-item d-flex justify-content-between align-items-center">
      {JSON.stringify(amount.item_name)}
      <span ref={this.itemCalRef} className="badge bg-primary rounded-pill">{amount.nf_calories}</span>
      </li>
    });

  return(
      <div className="list-items">
        {this.props.amount.length !== 0 ? newIngredient() : null}
        <TotalCalories total={this.props.amount.length}/>
      </div>
    )
  }
}

export default Ingredients;