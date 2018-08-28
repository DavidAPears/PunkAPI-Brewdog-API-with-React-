import React from 'react';

const BeerDetail = (props) =>{
  if(!props.selectedBeer) return null;
  return (
    <div>
      <h3>Name: {props.selectedBeer.name}</h3>
      <p> Description: {props.selectedBeer.description}</p>
      <p> Brewer's Tips: {props.selectedBeer.brewers_tips}</p>
      <p> Try Serving With: {props.selectedBeer.food_pairing.join(", ")}</p>
      


    </div>
  )
}

export default BeerDetail;
