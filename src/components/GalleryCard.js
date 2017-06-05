import React, { Component } from 'react';
import data from '../data.json';
import '../css/GalleryCard.css';

class GalleryCard extends Component {
  render () {
    let image = '../' + this.props.image;
    return (
      <div className='gallery-card'>
        <div className="card-deck">
          <div className="col-sm-3">
            <div className="card" id="trainer-card">
              <img className="card-img-top" src={image} alt="" />
              <div className="card-block">
                <a className="card-title" href={`http://localhost:3000/products/${this.props.id}`}>{this.props.name}</a>
                <h4 ></h4>
                <p className="prev-price">{this.props.previous_price}</p>
                <h4 className="card-text">{this.props.current_price}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryCard;