import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const images = [
    {url: '/src/assets/images/brand-01.png'}
  ]
  return (
    <>
      <section className="home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="/src/assets/images/main-banner-1.jpg" alt="" className='img-fluid rounded-3' />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or <br /> $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img src="/src/assets/images/catbanner-01.jpg" alt="" className='img-fluid rounded-3' />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 or <br /> $64.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="/src/assets/images/catbanner-02.jpg" alt="" className='img-fluid rounded-3' />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $599.00 or <br /> $49.91/mo. for 12 mo.*</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="/src/assets/images/catbanner-03.jpg" alt="" className='img-fluid rounded-3' />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest band <br /> styles and colours.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="/src/assets/images/catbanner-04.jpg" alt="" className='img-fluid rounded-3' />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback & <br /> ultra-low distortion</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-15'>
                  <img src="/src/assets/images/service.png" alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="/src/assets/images/service-02.png" alt="" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save up to 25% Off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="/src/assets/images/service-03.png" alt="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="/src/assets/images/service-04.png" alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="/src/assets/images/service-05.png" alt="" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className='d-flex align-items-center'>
                  <div>
                    <h6>Computers & Laptop</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="/src/assets/images/laptop.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/src/assets/images/camera.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Television</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="/src/assets/images/tv.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>11 Items</p>
                  </div>
                  <img src="/src/assets/images/camera.jpg" alt="" />
                </div>
                {}
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Mobiles & Tablets</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/src/assets/images/camera.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/src/assets/images/headphone.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/src/assets/images/acc.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/src/assets/images/speaker.jpg" alt="" />
                </div>
                {}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  {Array.from(Array(8), (_, index) => (
                    <div className='mx-4 w-25'>
                      <img src={`/src/assets/images/brand-0${index + 1}.png`} alt="" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>Feature Collection</h3>
          </div>
            { Array.from(Array(4), (_, index) => (
              <ProductCard />
            ))}
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
            { Array.from(Array(4), (_, index) => (
              <BlogCard />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
