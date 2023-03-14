import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'

export default function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline: <a className='text-white' href="tel: +91 XXXXXXXXXX">+91 XXXXXXXXXXXXXXX</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white">Dev Mobile</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className='form-control py-2'
                  placeholder='Search Product Here...'
                  aria-label='Search Product Here...'
                  aria-describedby='basic-addon2'
                  />
                  <span className='input-group-text p-3' id='basic-addon2'>
                    <BsSearch className='fs-6' />
                  </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/src/assets/images/compare.svg" alt="" />
                    <p className='mb-0'>Compare<br />Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/src/assets/images/wishlist.svg" alt="" />
                    <p className='mb-0'>Favorite<br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/src/assets/images/user.svg" alt="user" />
                    <p className='mb-0'>Login in<br />My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/src/assets/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/src/assets/images/menu.svg" alt="" />
                    <span className='me-5 d-inline-block'>Shop Categories</span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby='dropdownMenuButton1'>
                    <li><Link class="dropdown-item text-white" to="#">Action</Link></li>
                    <li><Link class="dropdown-item text-white" to="#">Another action</Link></li>
                    <li><Link class="dropdown-item text-white" to="#">Something else here</Link></li>
                  </ul>
                </div>
                </>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink>Home</NavLink>
                    <NavLink>Our Store</NavLink>
                    <NavLink>Blogs</NavLink>
                    <NavLink>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
