import React from 'react'

export default function ProductCard() {
  return (
    <div className='col-3'>
        <div className="product-card">
            <div className="product-image">
                <img src="/src/assets/images/watch.jpg" alt="" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, illo!
                </h5>
                <p className="price">$100.00</p>
            </div>
        </div>
    </div>
  )
}
