import React from 'react';
import BeerSelector from '../components/BeerSelector.js';
import BeerDetail from '../components/BeerDetail.js';
import IngredientsDetail from '../components/IngredientsDetail.js';

class BeerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      selectedBeer: null
    };
    this.handleBeerSelected = this.handleBeerSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://api.punkapi.com/v2/beers'
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((beers) => {
      this.setState({
        beers: beers
      });
    })
  }

  handleBeerSelected(index) {
    console.log(index);
    const selectedBeer = this.state.beers[index];
    console.log(this.state.beers[1]);
    console.log(selectedBeer);
    this.setState({
      selectedBeer: selectedBeer
    });
  }

render() {
  return (
    <div className="beer-container">
      <h2> Brew Dog Beer Bonanza </h2>
      <BeerSelector beers={this.state.beers}
        onBeerSelected = {this.handleBeerSelected} />
      <BeerDetail selectedBeer={this.state.selectedBeer} />
      <IngredientsDetail selectedBeer={this.state.selectedBeer}/>
    </div>
  )
}


};


export default BeerContainer;
