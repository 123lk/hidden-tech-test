import React, {Component} from 'react';
import HomepageHeader from './HomepageHeader';
import Gallery from './Gallery';
import '../css/DashboardRight.css';

class DashboardRight extends Component {
  render () {
    return (
      <div className='dashboard-right'>
      <h1>DashboardRight</h1>
      <HomepageHeader />
      <Gallery />
      </div>
    );
  }
}

export default DashboardRight;