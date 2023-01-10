import React from 'react'
import './testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination } from 'swiper'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Client1 from '../../assets/pic1.png'
import Client2 from '../../assets/pic2.png'
import Client3 from '../../assets/pic3.png'
import Client4 from '../../assets/pic4.png'

const clients = [
  {
    pic:    Client1,
    Name:   "Yusuf",
    review: "I was an absolute begginer in the progamming field, thank God I met charles, who made my path smooth, and now I am fullstack developer "
  },
  {
    pic:    Client2,
    Name:   "Collins",
    review: "Charles is a great Mentor, I like the ways he checks up on his students making sure they are more encouraged"
             
  },
  {
    pic:    Client3,
    Name:   "Daniel",
    review: "I will recommend charles to those who are absolute beginners, because he teaches in a very beginner-friendly way"
             
  },
  {
    pic:    Client4,
    Name:   "Tracy",
    review: "charles is a good teacher, I have always struggled with javascript, but he helped me understand javascript concepts better"
             
  }
]


const Testimonials = () => {
  return (
    <section>
        <h5> Review from Clients </h5>
        <h2>Testimonials</h2>

        <Swiper className='container testimonials__container'
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
            { 
              clients.map(({pic, Name, review}, index)=>{ 
                return(  
                  <SwiperSlide className='testimonial' key={index}>
                    
                      <div className='client__avater'>
                          <img src={pic} alt='testimony'/>
                      </div>
                      <h5 className='client__name'>{Name}</h5>

                      <small className='client__review'>
                        {review}
                      </small>
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
    </section>
  )
}

export default Testimonials