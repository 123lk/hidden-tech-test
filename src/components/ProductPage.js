import React, { Component } from 'react';
import MainProduct from './MainProduct';
import RelatedProductGallery from './RelatedProductGallery';
import Pageheader from './PageHeader';
import SideNav from './SideNav';

class ProductPage extends Component {
  render () {
    return (
      <div className='container-fluid' id='product-page'>
        <div className='row'>
          <div className='col-md-12'>
            <Pageheader />
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
