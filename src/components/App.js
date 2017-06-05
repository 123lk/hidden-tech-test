import React, { Component } from 'react';
import SideNav from './SideNav';
import HomePage from './HomePage';
import '../css/App.css';

class App extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className="page-header">
              <h1>Example Page Header</h1>
            </div>
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
