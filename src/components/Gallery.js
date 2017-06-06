import React, { Component } from 'react';
import GalleryCard from './GalleryCard';
import data from '../data.json';
import '../css/Gallery.css';

const trainers = data.trainers;
let selectedColour = '';

class Gallery extends Component {
  constructor () {
    super();
    this.state = {
      showAll: false,
      blueOnly: false,
      blackOnly: false,
      whiteOnly: false,
      redOnly: false
    };
    this.onClickBlue = this.onClickBlue.bind(this);
    this.onClickBlack = this.onClickBlack.bind(this);
    this.onClickWhite = this.onClickWhite.bind(this);
    this.onClickRed = this.onClickRed.bind(this);
    this.onClickShowAll = this.onClickShowAll.bind(this);
  }
  onClickBlue (event) {
    if (event) event.preventDefault();
    selectedColour = 'blue';
    this.setState({blueOnly: !this.state.blueOnly});
  }
  onClickBlack (event) {
    if (event) event.preventDefault();
    selectedColour = 'black';
    this.setState({ blackOnly: !this.state.blackOnly });
  }
  onClickWhite (event) {
    if (event) event.preventDefault();
    selectedColour = 'white';
    this.setState({ whiteOnly: !this.state.whiteOnly });
  }
  onClickRed (event) {
    if (event) event.preventDefault();
    selectedColour = 'red';
    this.setState({ redOnly: !this.state.whiteOnly });
  }
  onClickShowAll (event) {
    if (event) event.preventDefault();
    selectedColour = '';
    this.setState({ redOnly: !this.state.showAll });
  }
  render () {
    let filteredTrainers = trainers.filter((el) => {
      if (selectedColour === '') {
        return trainers;
      } else {
        return el.colours[0] === selectedColour;
      }
    });
    return (
      <div className='gallery'>
        <div className="btn-group">
          <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id='filter-button'>
            Filter by colour  <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li onClick={this.onClickShowAll} id="dropdown-item">Show all</li>
            <li onClick={this.onClickBlue} id="dropdown-item">Blue</li>
            <li onClick={this.onClickBlack} id="dropdown-item">Black</li>
            <li onClick={this.onClickWhite} id="dropdown-item">White</li>
            <li onClick={this.onClickRed} id="dropdown-item">Red</li>
          </ul>
        </div>
        {filteredTrainers.map((product, i) => {
          return (
            <GalleryCard
              key={i}
              id={product.id}
              name={product.product_name}
              description={product.description}
              image={product.image}
              previous_price={product.previous_price}
              current_price={product.current_price}
              colours={product.colours}
            />
          );
        })}
      </div>
    );
  }
}

export default Gallery;