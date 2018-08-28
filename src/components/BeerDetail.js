import React from 'react';

const BeerDetail = (props) =>{
  if(!props.selectedBeer) return null;
  return (
    <div>
      <h3>Name: {props.selectedBeer.name}</h3>
      <p> Description: {props.selectedBeer.description}</p>
  
    </div>
  )
}

export default BeerDetail;
