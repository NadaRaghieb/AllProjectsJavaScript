import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
// import {BsGithub} from 'react-icons/bs'
// import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className='container contact__container'>
       <div className='contact__option'>
        <article className='contact__options'>
          <HiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>nadaraghieb@gmail.com</h5>
          <a href='mailto:nadaraghieb@gmail.com' target={'_blank'}>Send a message</a>
          <h4></h4>
        </article>
        <article className='contact__options'>
          <BsWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+966548285301</h5>
          <a href='http://api.whatsapp.com/send?phone=966548285301' target={'_blank'}>Send a message</a>
          <h4></h4>
        </article>
       
       
       </div>
      {/* END OF CONTACT OPTION */}
      <from action=''>
        <input type={'text'} name='name' placeholder='Your Full Name' required />
        <input type={'email'} name='email' placeholder='Your Email ' required />
        <textarea name="message" rows="7" placeholder='Your Message' require></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </from>
     </div>
      
    </section>
  )
}

export default Contact