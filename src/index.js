import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/products/:id' component={ProductPage} />
    </div>
  </Router>
  , document.getElementById('root'));
