import React, { useRef, useState } from 'react';
import transition from '../FramerMotion/transition';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [popupVisible, setPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gh81kgl', 'template_j7u5nfo', form.current, 'PoFy_VMBgwUQyAfCA')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setPopupVisible(true);
          setTimeout(() => setPopupVisible(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-form-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <h2>Contacto</h2>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" value="Send" style={{ background: 'orange', fontWeight: 'bold' }}>
            Hablemos!
          </button>
        </form>
      </div>
      {popupVisible && (
        <div className="popup">
          <p>¡Mensaje enviado con éxito!</p>
        </div>
      )}
    </>
  );
};

export default transition(Contact);