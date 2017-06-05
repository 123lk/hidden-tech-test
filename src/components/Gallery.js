import React, { Component } from 'react';
import GalleryCard from './GalleryCard';
import data from '../data.json';
import '../css/Gallery.css';

const trainers = data.trainers;

class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
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