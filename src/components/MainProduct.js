import React, {Component} from 'react';
import data from '../data.json';
import '../css/MainProduct.css';

class MainProduct extends Component {
  render () {
  let product = data.trainers[0];
    return (
      <div className='main-product'>
      <img src={require('../assets/images-1.jpg')} alt="" width='30%'/>
      <div id='product-details'>
      <h1>{product.product_name}</h1>
      <p>{product.description}</p>
      <h4>{product.previous_price}</h4>
      <h1>NOW {product.current_price}</h1>
      </div>
      </div>
    );
  }
}

export default MainProduct;