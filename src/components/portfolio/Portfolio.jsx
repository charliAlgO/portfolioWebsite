import React from 'react'
import './portfolio.css'
import { Lists } from './PortfolioLists'


const Portfolio = () => {
  return (
   <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>

       <div className='container portfolio__container'>
        { 
          Lists.map(({id,image,title,Github,Demo})=>{
            return( 
                <article className='portfolio__item'key={id}>
                <div className='portfolio__item-image'>
                    <img src={image} alt='PortImage'/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                    <a href={Github} className='btn' target= '_blank'>Github</a>
                    <a href={Demo} className='btn btn-primary' target= '_blank'>Live Demo</a>
                </div>
                </article>
            )
          })
        }
        </div>
   </section>
  )
}

export default Portfolio

      
 