import React, { Component } from 'react';
import data from '../data.json';
import RelatedProductGalleryCard from './RelatedProductGalleryCard';
import '../css/RelatedProductGallery.css';

const trainers = data.trainers;
const productColour = data.trainers[0].colours[0];

class RelatedProductGallery extends Component {
  render () {
    return (
      <div className='related-product-gallery'>
        <h2>Related products</h2>
        {trainers.map((product, i) => {
          return product.colours.map((colour, i) => {
            if (colour === productColour) 
              return (
                <RelatedProductGalleryCard
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
          });
        })}
      </div>
    );
  }
}

export default RelatedProductGallery;