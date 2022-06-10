import './Contact.css';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {
  const SERVICE_ID = "service_s4e04tk";
  const TEMPLATE_ID = "template_p3sifdn";
  const USER_ID = "dSiKCnmfy9o95utvU";
  const form = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  }

  return(
    <div className='contact'>
      <form ref={form} onSubmit={handleOnSubmit}>
        <div className='field'>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className='field'>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className='field'>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <input className='green' type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact;