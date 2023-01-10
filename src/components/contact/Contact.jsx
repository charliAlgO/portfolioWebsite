import React, {useRef} from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_x8659o9', 'template_uwsybmy', form.current, 'KgyjF8OMMwBdD7XHM')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text)
      });
      e.target.reset()
  };

  return (
   <section id='contact'>
     <h5> Get In Touch</h5>
     <h2> Contact Me</h2>

     <div className='container contact__container'>
       <div className='contact__options'>
         <article className='contact__option'>
          <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5> charles.capitalgroup@gmail</h5>
          <a href='mailto:charles.capitalgroup@gmail.com' target='_blank'>Send a message</a>
         </article>

         <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5> charliAlgo</h5>
          <a href='https://m.me/charles' target='_blank'>Send a message</a>
         </article>

         <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+2348103296914</h5>
          <a href='https://api.whatsapp.com/send?phone=+2348103296914' target='_blank'>Send a     message</a>
         </article>
       </div>

       <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='Name' placeholder='Enter Your Name' required/>
        <input type='email' name= 'Email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'> Send Message</button>
       </form>

     </div>
   </section>
  )
}

export default Contact