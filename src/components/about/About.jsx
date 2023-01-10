import React from 'react'
import './about.css'
import  Me from '../../assets/mypic.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>  
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={Me} alt= 'image2'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 1+ years</small>
            </article>

            <article className='about__card'>
              <FaUserFriends className='about__icon'/>
              <h5>Clients</h5>
              <small> 20+ Currently</small>
            </article>

            <article className='about__card'>
              <VscFolder className='about__icon'/>
              <h5>Projects</h5>
              <small> 10+ Completed</small>
            </article>
          </div>

          <p>
            Compiled successfully!webpack compiled successfully
            Watchpack Error (watcher): Error: ENOSPC: System limit for number of file watchers reached, watch '/
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About