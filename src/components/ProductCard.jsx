import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

export default function ProductCard() {
  return (
    <div className='col-3'>
        <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                    <img src="/src/assets/images/wish.svg" alt="" />
                </Link>
            </div>
            <div className="product-image">
                <img src="/src/assets/images/watch.jpg" alt=""  className='img-fluid'/>
                <img src="/src/assets/images/tab.jpg" alt="" className='img-fluid' />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, illo!
                </h5>
                <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                 {['add-cart', 'prodcompare', 'view'].reverse().map(item => (
                    <Link>
                        <img src={`/src/assets/images/${item}.svg`} />
                    </Link>
                 ))}
                </div>
            </div>
        </div>
    </div>
  )
}
