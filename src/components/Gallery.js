import React, {Component} from 'react';
import GalleryCard from './GalleryCard';
import '../css/Gallery.css';

class Gallery extends Component {
  render () {
    return (
      <div className='gallery'>
      <h1>Gallery</h1>
      <GalleryCard />
      </div>
    );
  }
}

export default Gallery;