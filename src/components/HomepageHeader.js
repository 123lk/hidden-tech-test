import React, { Component } from 'react';
import '../css/HomepageHeader.css';

class HomepageHeader extends Component {
  render() {
    return (
      <div className='homepage-header'>
        <h1>Sale</h1>
        <div className="btn-group">
          <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by colour  <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li>Blue</li>
            <li>Black</li>
            <li>White</li>
            <li>Red</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomepageHeader;