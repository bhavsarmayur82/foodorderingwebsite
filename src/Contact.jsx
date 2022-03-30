import React from 'react'
import './Contact.css'
import ContactPic from './Images/fooda.jpeg'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${ContactPic})`}}></div>
      <div className='rightSide'>
          <h1>Contact Us</h1>
          <form id="contact-form">
              <label htmlFor='name'>Full Name</label>
              <input name='name' type='text'/>
              <label htmlFor='email'>Email</label>
              <input name='email' type='email'/>
              <label htmlFor='message'>Message</label>
              <textarea name='message' rows='7'></textarea>
              <button type='submit'>Send Message</button>
          </form>
      </div>
    </div>
  )
}   

export default Contact
