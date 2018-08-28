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

  ComponentDidMount() {
    const url = 'https://api.punkapi.com/v2'
    fetch(url)
    .then((res) => {
      return.json();
    })
    .then((beers) => {
      this.setState({
        beers: beers
      });
    })
  }

render() {
  return (
    <div>
      <h2> Brew Dog Beer Bonanza </h2>
      <BeerSelector beers={this.state.beers}
        onBeerSelected = {this.handleBeerSelected} />
      <BeerDetail selectedBeer={this.state.selectedBeer} />
    </div>
  )
}


};


export default BeerContainer;
