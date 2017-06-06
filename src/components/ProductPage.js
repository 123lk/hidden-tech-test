import React, { Component } from 'react';
import SideNav from './SideNav';
import MainProduct from './MainProduct';
import RelatedProductGallery from './RelatedProductGallery';
import PageHeader from './PageHeader';
import '../css/ProductPage.css';

class ProductPage extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <PageHeader />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <SideNav />
          </div>
          <div className='col-md-9' id='right-side'>
            <MainProduct />
            <RelatedProductGallery />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;



