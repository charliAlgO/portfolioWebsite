import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/pic.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {

  return (
    <header>
        <div className="header__container">
            <h5>Hello! I am</h5>
            <h1>Abu Charles</h1>
            <h5 className='text-light'>Mern-Stack  & .NET Developer</h5>
            <CTA />
            <HeaderSocials/>

            <div className='me'>
              <div className="mymage">  
                <img src={ME} alt='mypic'></img>
              </div>
            </div>

            <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header