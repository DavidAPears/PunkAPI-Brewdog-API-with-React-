import React from 'react';

const IngredientsDetail = (props) =>{
  if(!props.selectedBeer) return null;

   const beersMalts = props.selectedBeer.ingredients.malt.map((malt)=>{
     console.log(malt.name);
    return malt.name;
  })
    const beersHops = props.selectedBeer.ingredients.hops.map((hop)=>{
      console.log(hop.name);
     return hop.name;
  })
  return (
    <div>
      <h3>Ingredients </h3>
      <p>Hop(s): {beersHops.join(", ")}</p>
      <p>Malt(s): {beersMalts.join(", ")}</p>
      <p>Yeast: {props.selectedBeer.ingredients.yeast}</p>
      <img src = {props.selectedBeer.image_url} height =  '230em' width='50em'/>

    </div>
  )
}

export default IngredientsDetail;
