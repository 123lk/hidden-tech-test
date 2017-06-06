import React, { Component } from 'react';
import '../css/PageHeader.css';

class PageHeader extends Component {
  render () {
    return (
      <div className="page-header">
        <span><a href="http://localhost:3000/"><img id='header-logo' src={require('../assets/logo-header.png')} alt="" width="20%"/></a></span>
        <span id='header-sub-title'>Quality trainers with the best prices, guaranteed!</span>
      </div>
    );
  }
}

export default PageHeader;