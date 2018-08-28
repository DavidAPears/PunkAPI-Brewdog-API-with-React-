import React from 'react';

const BeerSelector = (props) => {

function handleChange(evt){
  props.onBeerSelected(evt.target.value);
}

const options = props.beers.map((beer, index) => {

  return <option value ={index} key= {index}> {beer.name} </option>
})

return (
  <select
    id='beer-selector'
    defaultValue="default"
    onChange={handleChange}
  >
    <option disabled value="default">Choose a beer...</option>
    {options}
  </select>
  )
}

export default BeerSelector;
