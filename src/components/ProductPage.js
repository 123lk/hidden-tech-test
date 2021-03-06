import React, { Component } from 'react';
import SideNav from './SideNav';
import MainProduct from './MainProduct';
import RelatedProductGallery from './RelatedProductGallery';
import PageHeader from './PageHeader';

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
            <MainProduct 
            id={this.props.match.params.id}
            />
            <RelatedProductGallery 
            id={this.props.match.params.id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;



