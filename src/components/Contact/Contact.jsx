import React, { useState } from 'react'
import transition from '../FramerMotion/transition'
import './Contact.css'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, como enviar los datos a un servidor.
        console.log('Formulario enviado', formData);
        // Limpiar el formulario después de enviarlo
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
  return (
    <>
         <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contacto</h2>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={{background:'orange', fontWeight:'bold'}}>Enviar</button>
      </form>
    </div>
    </>
  )
}

export default transition(Contact);