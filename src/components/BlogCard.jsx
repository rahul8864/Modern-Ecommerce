import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogCard() {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className="card-image">
                <img src="/src/assets/images/blog-1.jpg" className='img-fluid' alt="" />
            </div>
            <div className="blog-content">
                <p className="date">1 Dec 2022</p>
                <h5 className="title">Lorem ipsum dolor sit amet.</h5>
                <p className="dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi numquam quo doloremque sunt. Laudantium voluptates blanditiis error. Adipisci perferendis deserunt maxime rerum placeat fuga, veniam, doloribus ut beatae, corporis labore.</p>
                <Link className='button'>Read More</Link>
            </div>
        </div>
    </div>
  )
}
