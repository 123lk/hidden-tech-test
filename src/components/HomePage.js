import React, {Component} from 'react';
import HomepageHeader from './HomepageHeader';
import Gallery from './Gallery';
import '../css/HomePage.css';

class HomePage extends Component {
  render () {
    return (
      <div className='home-page'>
      <HomepageHeader />
      <Gallery />
      </div>
    );
  }
}

export default HomePage;