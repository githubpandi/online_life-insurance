import React from 'react';
import productImage1 from '../assets/css/prod3.jpg';
import productImage2 from '../assets/css/prod2.jpg';
import productImage3 from '../assets/css/prod5.jpg';
import productImage4 from '../assets/css/prod6.jpg';
import productImage5 from '../assets/css/prod8.jpg';
import productImage6 from '../assets/css/prod9.jpg';
import productImage7 from '../assets/css/prod11.jpg';
import productImage8 from '../assets/css/prod10.jpg';
import KitchenSinkExample from './Products';
import './ProductMain.css'; 

export default function ProductMain() {
  return (
      <div className='card-container'>
      <h1>Best Policies</h1>
      <div className='card-row1'>
      <KitchenSinkExample productImage={productImage1} />
      <KitchenSinkExample productImage={productImage2} />
      <KitchenSinkExample productImage={productImage3} />
      <KitchenSinkExample productImage={productImage4} />
      </div>
      <div className='card-row2'>
        <KitchenSinkExample productImage={productImage5} />
        <KitchenSinkExample productImage={productImage6} />
        <KitchenSinkExample productImage={productImage7} />
        <KitchenSinkExample productImage={productImage8} />
      </div>
    </div>
  );
}