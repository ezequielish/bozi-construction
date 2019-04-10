import React, { Component } from 'react';

class ContactContainer extends Component {
    render() {
        return (
            <section className='Contact'>
                <h1>Contactanos</h1>
                <div className='Contact__desctiption'>
                    <h2>Ponte en contacto y pide tu presupuesto sin ningún compromiso</h2>
                    <h3>Brindamos toda la información que necesitas saber.</h3>

                    <div className='Contact__desctiption-info'>
                        <p><img /> +34 666378709</p>
                        <p><img /> bozicontruccionesreformas@gmail.com</p>
                        <p><img /> Valencia, España.</p>
                    </div>
                </div>
                <div className='Contact__form'>
                    <form>
                        <input type='text' />
                        <input type='email' />
                        <input type='text' />
                        <textarea></textarea>
                        <input type='submit' />
                    </form>
                </div>
            </section>
        )
    }
}

export default ContactContainer;