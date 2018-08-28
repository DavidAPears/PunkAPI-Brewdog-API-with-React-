import React from 'react';

const IngredientsDetail = (props) =>{
  if(!props.selectedBeer) return null;
   const beersHops = props.selectedBeer.ingredients.malt.map((malt)=>{
     console.log(malt.name);
    return malt.name;

    // const beersMalts = props.selectedBeer.ingredients.malt.map((malt)=>{
    //   console.log(malt.name);
    //  return malt.name;

  })
  return (
    <div>
      <h3>Ingredients </h3>
      <p>Hop(s): {beersHops.join(", ")}</p>
      {/* <p>Malt(s): {beersMalts.join(", ")}</p> */}
      <p>Yeast: {props.selectedBeer.ingredients.yeast}</p>
    </div>
  )
}

export default IngredientsDetail;
