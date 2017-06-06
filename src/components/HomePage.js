import React, {Component} from 'react';
import Gallery from './Gallery';
import '../css/HomePage.css';

class HomePage extends Component {
  render () {
    return (
      <div className='home-page'>
      <h1 id='homepage-header'>Sale</h1>
      <Gallery />
      </div>
    );
  }
}

export default HomePage;