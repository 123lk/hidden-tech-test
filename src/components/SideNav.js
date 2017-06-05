import React, {Component} from 'react';
import '../css/SideNav.css';

class SideNav extends Component {
  render () {
    return (
      <div className='side-nav'>
        <ul>
          <li><a href='http://localhost:3000/ '>Homepage</a></li>
          <li>Men's Trainers</li>
          <li>Women's Trainers</li>
          <li>Kid's Trainers</li>
          <li>Sale</li>
        </ul>
      </div>
    );
  }
}

export default SideNav;