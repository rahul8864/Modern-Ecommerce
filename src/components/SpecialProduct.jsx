import React from 'react'
import ReactStars from 'react-rating-stars-component';

export default function SpecialProduct() {
  return (
    <div className='col-4'>
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
            <div>
                <img src="/src/assets/images/watch.jpg" alt=""  className='img-fluid'/>
            </div>
            <div className="special-product-content">
                <h5 className='brand'>Havels</h5>
                <h6 className='title'>Samsung Galaxy Note 10 Mobile; Sim...</h6>
                <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    editor={false}
                    active="#ffd700"
                />
                <div className="price">
                    <span className="red-p">$100</span> &nbsp;
                    <strike className="red-p">$200</strike>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
