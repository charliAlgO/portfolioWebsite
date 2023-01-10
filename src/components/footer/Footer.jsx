import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>CharliAlgo</a>
      
        <ul>
          <li><a href='#'>Home</a></li> 
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#testimonial'>Testimonials</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul> 
     

        <div className="footer__socials">
          <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
          <a href='https://github.com' target='_blank'><BsGithub/></a>
          <a href='https://twitter.com' target='_blank'><BsTwitter/></a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; CharliAlgo, All rights reserved</small>
        </div>

    </footer>
  )
}

export default Footer