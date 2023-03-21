import React from 'react'
import Style from '@/styles/Contact.module.css'

export const ContactForm = () => {
  return (
    <div className={Style.contact_form}>
      <div className='container'>
        <form className={Style.form}>
          <label htmlFor="name">
            Tu Nombre
            <input 
              type="text" 
              placeholder="Creative visual..." 
              id="company" 
              name="name"
            />
          </label>
          <label htmlFor="mail">
            Tu correo
            <input 
              type="text" 
              placeholder="Creative visual..." 
              id="company" 
              name="mail"
            />
          </label>
          <label htmlFor="asunto">
            Cuál es tu interes
            <input 
              type="text" 
              placeholder="Creative visual..." 
              id="company" 
              name="asunto"
            />
          </label>
          <label htmlFor="number">
            Tu numero teléfonico
            <input 
              type="text" 
              placeholder="Creative visual..." 
              id="company" 
              name="number"
            />
          </label>
          <label htmlFor="message">
            Ingresa tu mensaje
            <textarea
            
            ></textarea>
          </label>
          <button className={Style.btn_contact}>Enviar</button>
        </form>
      </div>
      
    </div>
  )
}
