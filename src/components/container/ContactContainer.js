import React, { Component } from 'react';
import mapa from '../../assets/img/icons/map.svg';
import email from '../../assets/img/icons/social-network/email.svg';
import whatsapp from '../../assets/img/icons/social-network/whatsapp.svg';
import axios from 'axios';
class ContactContainer extends Component {
    constructor(props) {
        super(props)
        this.refForm = React.createRef()
        this.state = {
            sendStatus: false,
            msgEmail: 'Enviando...'
        }
    }


    handleSubmit(e) {

        e.preventDefault();
        let checkInput = 0;
        e.target.childNodes.forEach(inputs => {
            if (inputs.type == 'text' || inputs.type == 'email') {//
                if (inputs.value == "") {
                    inputs.focus()
                } else {
                    checkInput++;
                }
            }

        })

        if (checkInput > 2) {
            this.setState({
                sendStatus: true,
            })
            this.refForm.current.childNodes[4].disabled = true;
            this.refForm.current.childNodes[4].disabled ? this.refForm.current.childNodes[4].setAttribute("style", "color:grey; border:solid grey 1px") : null
            let currentComponent = this
            axios.post('/contactar', {
                data: {
                    nameClient: e.target.childNodes[0].value,
                    emailClient: e.target.childNodes[1].value,
                    subject: e.target.childNodes[2].value,
                    messageClient: e.target.childNodes[3].value
                }

            })
                .then(function (res) {

                    currentComponent.setState({
                        msgEmail: res.data.msg,
                    })
                    setTimeout(() => {
                        currentComponent.setState({
                            sendStatus: false,
                            msgEmail: 'Enviando...'
                        })
                        currentComponent.refForm.current.childNodes[4].disabled ? currentComponent.refForm.current.childNodes[4].setAttribute("style", "color:white; border:solid white 1px") : null
                        currentComponent.refForm.current.childNodes[4].disabled = false;
                        currentComponent.refForm.current.reset();
                    }, 1000)
                })
                .catch(function (err) {
                    currentComponent.setState({
                        msgEmail: 'Algo salió mal, intente de nuevo',
                    })
                    setTimeout(() => {
                        currentComponent.setState({
                            sendStatus: false,
                            msgEmail: 'Enviando...'
                        })
                        currentComponent.refForm.current.childNodes[4].disabled ? currentComponent.refForm.current.childNodes[4].setAttribute("style", "color:white; border:solid white 1px") : null
                        currentComponent.refForm.current.childNodes[4].disabled = false;
                        currentComponent.refForm.current.reset();
                    }, 3000)

                })


        }


    }
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
                    <form onSubmit={this.handleSubmit.bind(this)} ref={this.refForm}>
                        <input type='text' name="name" placeholder='Nombre (obligatorio)' />
                        <input type='email' name="email" placeholder='Correo electrónico (obligatorio)' />
                        <input type='text' name="asunto" placeholder='asunto (obligatorio)' />
                        <textarea placeholder='Mensaje'></textarea>
                        <button>ENVIAR</button>
                        {
                            this.state.sendStatus &&
                            <h3>{this.state.msgEmail}</h3>
                        }

                    </form>
                </div>
            </section>
        )
    }
}

export default ContactContainer;