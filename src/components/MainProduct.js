import React, { Component } from 'react';
import data from '../data.json';
import * as helpers from '../helpers/helpers.js';
import '../css/MainProduct.css';

const findById = helpers.findById;

class MainProduct extends Component {
  render () {
    let id = this.props.id;
    let arrangedById = findById(data.trainers);
    let product = arrangedById[id];
    return (
      <div className='main-product'>
        <img src={require('../' + product.image)} alt="" width='40%' id='main-product-image' />
        <div id='product-details'>
          <h1>{product.product_name}</h1>
          <p>{product.description}</p>
          <h4 id='main-product-prev-price'>{product.previous_price}</h4>
          <h1>NOW {product.current_price}</h1>
          <span>
          <div className="btn-group">
            <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Size  <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li id="dropdown-item-mp">5</li>
              <li id="dropdown-item-mp">6</li>
              <li id="dropdown-item-mp">7</li>
              <li id="dropdown-item-mp">8</li>
              <li id="dropdown-item-mp">9</li>
            </ul>
          </div>
          </span>
          <span>
          <div className="btn-group">
            <button className="btn btn-default btn-sm dropdown-toggle" id='quantity-button' type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Quantity  <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li id="dropdown-item-mp">1</li>
              <li id="dropdown-item-mp">2</li>
              <li id="dropdown-item-mp">3</li>
              <li id="dropdown-item-mp">4</li>
              <li id="dropdown-item-mp">5</li>
            </ul>
          </div>
          </span>
          <span>
            <button className="btn btn-default btn-sm" id='quantity-button' type="button" aria-expanded="false">Buy now</button>
          </span>
        </div>
      </div>
    );
  }
}

export default MainProduct;