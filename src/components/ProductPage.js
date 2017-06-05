import React, { Component } from 'react';
import MainProduct from './MainProduct';
import RelatedProductGallery from './RelatedProductGallery';
import SideNav from './SideNav';
import '../css/ProductPage.css';

class ProductPage extends Component {
  render() {
    return (
      <div className='container-fluid' id='product-page'>
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
          <MainProduct />
          <RelatedProductGallery />
        </div>
      </div>
    );
  }
}

export default ProductPage;
