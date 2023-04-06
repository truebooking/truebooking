import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.</p>
            <br />
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p>
            <div className='icon flex_space'>
              <a href="/"><i className='fab fa-facebook-f'></i></a>
              <a href="/"><i className='fab fa-twitter'></i></a>
              <a href="/"><i className='fab fa-linkedin'></i></a>
              <a href="/"><i className='fab fa-instagram'></i></a>
              <a href="/"><i className='fab fa-pinterest'></i></a>
              <a href="/"><i className='fab fa-youtube'></i></a>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>02 March 2023</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>02 March 2023</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>02 March 2023</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
