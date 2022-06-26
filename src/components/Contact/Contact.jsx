import React, { useRef } from 'react';

import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
  };

  return (
    <div className='contact-form' id='Contact'>
      <div className='w-left'>
        <div className='awesome'>
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className='blur s-blur1'
            style={{ background: '#abf1ff94' }}
          ></div>
        </div>
      </div>
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='user_name'
            className='user'
            placeholder='Name'
          />
          <input
            type='text'
            name='user_email'
            className='user'
            placeholder='Email'
          />
          <textarea
            name='message'
            className='user'
            placeholder='message'
          ></textarea>
          <input type='submit' value='Send' className='button' />
          <div
            className='blur c-blur1'
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
