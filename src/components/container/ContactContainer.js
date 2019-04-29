import React, { Component } from 'react';
import mapa from '../../assets/img/icons/map.svg';
import email from '../../assets/img/icons/social-network/email.svg';
import whatsapp from '../../assets/img/icons/social-network/whatsapp.svg';
class ContactContainer extends Component {
    render() {
        return (
            <section className='Contact'>
                <h1>Contactanos</h1>
                <div className='Contact__description'>
                    <h2>Ponte en contacto y pide tu presupuesto sin ningún compromiso</h2>
                    <h3>Brindamos toda la información que necesitas saber.</h3>

                    <div className='description-info'>
                        <p><img src={whatsapp} width='20px' height='20px' /> +34 666 37 87 09</p>
                        <p><img src={whatsapp} width='20px' height='20px' /> +34 644 87 20 16</p>
                        <p><img src={email} width='20px' height='20px' /> bozicontruccionesreformas@gmail.com</p>
                        <p><img src={mapa} width='20px' height='20px' /><img /> Valencia, España.</p>
                    </div>
                </div>
                <div className='Contact__form'>
                    <form>
                        <input type='text' placeholder='Nombre (obligatorio)' />
                        <input type='email' placeholder='Correo electrónico (obligatorio)' />
                        <input type='text' placeholder='asunto (obligatorio)' />
                        <textarea placeholder='Mensaje'></textarea>
                        <button>ENVIAR</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default ContactContainer;