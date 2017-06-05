import React, { Component } from 'react';
import '../css/PageHeader.css';

class PageHeader extends Component {
  render () {
    return (
      <div className="page-header">
        <span><img src={require('../assets/logo-header.png')} alt="" width="20%"/></span>
        <span>Quality trainers with the best prices, guarenteed!</span>
      </div>
    );
  }
}

export default PageHeader;