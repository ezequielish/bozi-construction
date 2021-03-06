import React, { Component } from 'react';
import aboutImg from '../assets/img/about.jpg';

class About extends Component {
    constructor(props) {
        super(props)
        this.aboutDescription = null
        this.descriptionContent = React.createRef()

    }
    state = {
        showContent: false,
    }

    componentDidMount() {
        const _this = this
        const observer = new window.IntersectionObserver(function(entries) {               
          const { isIntersecting } = entries[0]; //sacamos todos los itens que estan en el viewport

          if (isIntersecting) {
            _this.setState({
                showContent: true
            })
            observer.disconnect(); //una vez que se muestre el item ya lo desconectamos
          }
        });
        observer.observe(this.descriptionContent.current); // le pasamos el elemento al observe
    }
    render() {
        return (
            <section className='About'>
                <h1>Nosotros</h1>
                <div className='About__level'>
                    <div className='About__image'>
                        <figure>
                            <div className='About__image_decorator'></div>
                            <img src={aboutImg} className='about-img' />
                        </figure>
                    </div>
                    <div className={`About__description ${this.state.showContent && 'show'}`} ref={this.descriptionContent }>
                        <h3>SERVICIO DE CALIDAD</h3>
                        <p>
                            <strong>Bozi Construcciones y Reformas</strong>, cuenta con una amplia experiencia en el sector de la construcción, lo que le ha permitido especializarse en todo tipo de trabajos de Construcción especializándonos sobre todo en reformas integrales de vivienda y reformas.
                        </p>
                        <p>
                            Cubrimos todas las fases y necesidades de un proyecto, desde las reparaciones pequeñas hasta la construcción integral con entrega de llave en mano, un equipo multidisciplinario de profesionales con amplia experiencia en construcción, reparación, conservación y decoración de toda clase de edificios y locales. Un equipo que ha trabajado para clientes emblemáticos y con un alto grado de exigencia en la calidad del trabajo, los plazos y el compromiso.
                        </p>
                        <p>
                            Tenemos una experiencia de más de 10 años contando con un equipo de profesionales entre los que se encuentran arquitectos técnicos, decoradores, albañiles, fontaneros, electricistas, pintores, carpinteros, entre otros; y gracias a la gran coordinación y profesionalidad de nuestros oficios podemos ofrecer una propuesta competitiva y de valor para nuestros clientes.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;