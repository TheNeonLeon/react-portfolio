import React from 'react';
import  emailjs  from 'emailjs-com';
import './contactMe.css'

export default function ContactMe(){
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_tyfjgth', 'template_5vl1vq5', e.target, 'user_FwQ6FiXLBG913IEeaa16m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return(
        <form  className="contact-form" onSubmit={sendEmail}>
            <input class="form-control w-50 p-3" type="text" name="name" placeholder="Name" required></input>
            <input class="form-control w-50 p-3" type="email" name="email" placeholder="Email" required />
      <textarea class="form-control w-50 p-3" name="message" placeholder="Message" required />
      <input  class="btn btn-primary btn-lg" type="submit" value="Send" />
        </form>
    );
}