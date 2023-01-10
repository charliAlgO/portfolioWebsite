import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5> What skills do I have</h5>
        <h2>My Experience</h2>
        <div className='container experience__container'>
          <div className='experience__frontEnd'>
            <h3>Front-End Development</h3>
            <div className='experience__content'>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div> 
                  <h4>Html</h4>
               
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div> 
                  <h4>Css</h4>
               
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div> 
                <h4>Javascript</h4>
               
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div> 
                  <h4>ReactJs</h4>
                
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div> 
                  <h4>TypeScript</h4>
               
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div> 
                  <h4>NextJs</h4>
                
                <small className='text-light'>Basic</small>
                </div>
              </article>


            </div>
          </div>

          <div className='experience__backend'>
            <h3>Back-End Development</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div> 
                    <h4>NodeJs</h4>
                 
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div> 
                    <h4>MongoDB</h4>
                  
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div> 
                    <h4>Express</h4>
                  
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div className='experience__details-content'> 
                    <h4>C#</h4>
                    <small className='text-light'>Basic</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div> 
                    <h4>Azure</h4>
                  
                  <small className='text-light'>Basic</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                 
                  <div > 
                   <h4>.NET</h4>
                 
                  <small className='text-light'>Basic</small>
                  </div>
                </article>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Experience