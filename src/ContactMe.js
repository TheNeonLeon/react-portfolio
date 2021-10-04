import React from 'react';
import  emailjs  from 'emailjs-com';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import { Button } from 'react-bootstrap';

import './contactMe.css'

export default function ContactMe(){
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

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
        <div>
        <form  className="contact-form" onSubmit={sendEmail}>
            <input class="form-control w-50 p-3" type="text" name="name" placeholder="Name" required></input>
            <input class="form-control w-50 p-3" type="email" name="email" placeholder="Email" required />
      <textarea class="form-control w-50 p-3" name="message" placeholder="Message" required />
      <input onClick={handleShow} class="btn btn-primary btn-lg" type="submit" value="Send"/>
        </form>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>Thank you for sending your message</Modal.Body>
          <Modal.Footer>
      
            <Button variant="primary btn-sm" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
 
}
