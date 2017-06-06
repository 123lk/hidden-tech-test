import React, { Component } from 'react';
import GalleryCard from './GalleryCard';
import data from '../data.json';
import '../css/Gallery.css';

const trainers = data.trainers;

class Gallery extends Component {

  render () {

  let selectedColour = 'blue';

  let filtered = trainers.filter((el) => {
    return el.id === 2;
  });

  console.log(filtered);

    return (
      <div className='gallery'>
        <div className="btn-group">
          <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id='filter-button'>
            Filter by colour  <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li id="dropdown-item">Blue</li>
            <li id="dropdown-item">Black</li>
            <li id="dropdown-item">White</li>
            <li id="dropdown-item">Red</li>
          </ul>
        </div>
        {trainers.map((product, i) => {
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