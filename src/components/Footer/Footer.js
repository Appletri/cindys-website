import './Footer.css';
import mail from '../../assets/mail.svg';
import linkedin from '../../assets/linkedin.svg';
import React, { Component }  from 'react';

function Footer(props) {
  return(
    <footer>
      <h3>Let's Connect</h3>
      <p>Get in touch for opportunites or just to say hi!</p>
      <div className='contact-links'>
        <img src={mail} alt='email icon' />
        <img src={linkedin} alt='linkedin icon' />
      </div>
    </footer>
  );
}

export default Footer;