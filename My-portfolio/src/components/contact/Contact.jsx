import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = ({ language }) => {
  const [state, handleSubmit] = useForm("mblrjjlg");
  
  if (state.succeeded) {
    return <p>Thanks for Message!</p>;
  }

  return (
    <section id='contact'>
      <h5>{language === 'en' ? 'Get In Touch' : 'تواصل معنا'}</h5>
      <h2>{language === 'en' ? 'Contact Me' : 'اتصل بي'}</h2>
      <div className='container contact__container'>
        <div className='contact__option'>
          <article className='contact__options'>
            <HiOutlineMail className='contact_option-icon' />
            <h4>{language === 'en' ? 'Email' : 'البريد الالكتروني'}</h4>
            <h5>nadaraghieb@gmail.com</h5>
            <a href='mailto:nadaraghieb@gmail.com' target='_blank' rel='noreferrer'>
              {language === 'en' ? 'Send a message' : 'ارسل'}
            </a>
          </article>
          <article className='contact__options'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>{language === 'en' ? 'WhatsApp' : 'واتساب'}</h4>
            <h5>+966548285301</h5>
            <a href='http://api.whatsapp.com/send?phone=966548285301' target='_blank' rel='noreferrer'>
              {language === 'en' ? 'Send a message' : 'ارسل'}
            </a>
          </article>
        </div>
       
        <form action='https://formspree.io/f/mblrjjlg' onSubmit={handleSubmit}>
          <label htmlFor="email">
            {language === 'en' ? 'Email Address' : 'البريد الالكتروني'}
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder={language === 'en' ? 'Your Email' : 'ايميلك'}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
            placeholder={language === 'en' ? 'Your Message' : 'رسالتك'}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" className='btn btn-primary' disabled={state.submitting}>
            {language === 'en' ? 'Submit' : 'ارسال'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;