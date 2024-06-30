import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
// import {BsGithub} from 'react-icons/bs'
// import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const [state, handleSubmit] = useForm("mblrjjlg");
  if (state.succeeded) {
      return <p>Thanks for Message!</p>;
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__option'>
          <article className='contact__options'>
            <HiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>nadaraghieb@gmail.com</h5>
            <a href='mailto:nadaraghieb@gmail.com' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>
          <article className='contact__options'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+966548285301</h5>
            <a href='http://api.whatsapp.com/send?phone=966548285301' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>
        </div>
       
        {/* END OF CONTACT OPTION */}
        <form action='https://formspree.io/f/mblrjjlg' onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Your Email '
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Your Message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className='btn btn-primary' disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
    </section>
  )
}
export default Contact