import React from 'react';
import BeerSelector from '../components/BeerSelector.js';
import BeerDetail from '../components/BeerDetail.js';

class BeerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      selectedBeer: null
    };
    this.handleBeerSelected = this.handleBeerSelected.bind(this);
  }



};


export default BeerContainer;
