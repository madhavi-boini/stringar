import React from 'react'
import styles from '../styles/games.module.css'

function ContactUs() {
  let height={
    height: "100px"
  }
  let width={width:"95%"};
  return (
    <>
    <div className={styles.card} style={width} >
    <form className='m-5 bg-light p-3'>
      <div className='display-5 text-center text-primary mb-4'>Contact Us</div>
    <div class="form-floating mb-3">
  <input type="email" class="form-control" id="email" />
  <label for="email">Email address</label>
</div>
<div class="form-floating mb-3 ">
  <input type="text" class="form-control" id="sub" />
  <label for="sub">Subject</label>
</div>
<div class="form-floating">
  <textarea class="form-control" placeholder="Your Message" id="msg" style={height}></textarea>
  <label for="msg">Message</label>
</div>
<div className='text-center mt-3'><button className='btn btn-success px-5'>SEND</button></div>
    </form>
    </div>
    
</>
  )
}

export default ContactUs
