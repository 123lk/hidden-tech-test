import React, { Component } from 'react';
import SideNav from './SideNav';
import HomePage from './HomePage';
import PageHeader from './PageHeader';
import '../css/App.css';

class App extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
          <PageHeader />
          </div>
        </div>
          <div className='col-md-3'>
            <SideNav />
          </div>
          <div className='col-md-9'>
            <HomePage />
          </div>
        </div>
    );
  }
}

export default App;
