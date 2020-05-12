import React, { Component } from 'react';
import Services from '../Services';
import { fadeElement, fade } from '../../assets/js/effects'
import { Link } from 'react-router-dom';
import ServicesItem from '../ServicesItems'
import service_cocina from '../../assets/img/services/cocinas.svg';
import service_piscina from '../../assets/img/services/piscina.svg';
import service_pintura from '../../assets/img/services/pintura.svg';
import service_carpinteria from '../../assets/img/services/carpinteria.svg';
import service_solares from '../../assets/img/services/solares.svg';
import service_reforma_integral from '../../assets/img/services/reforma-integral.svg';
import service_demolicion from '../../assets/img/services/demolicion.svg';
import service_contruccion_general from '../../assets/img/services/contruccion-general.svg';

class ServicesContainer extends Component {
    constructor(prosp) {
        super(prosp)
        this.servicesContainer = null
        this.setServicesContainer = element => {
            this.servicesContainer = element
        }
    }
    state = {
        carrusel: false,
        items: [
            {
                img: service_cocina,
                description: 'Cocinas',
                tag: "cocina",
                _id: 1
            },
            {
                img: service_piscina,
                description: 'Piscina',
                tag: "piscina",
                _id: 2
            },
            {
                img: service_pintura,
                description: 'Pintura',
                tag: "pintura",
                _id: 3
            },
            {
                img: service_carpinteria,
                description: 'Carpinteria',
                tag: "carpinteria",
                _id: 4
            },
            {
                img: service_solares,
                description: 'Solares',
                tag: "solares",
                _id: 5
            },
            {
                img: service_reforma_integral,
                description: 'Reforma Integral',
                tag: "reforma_integral",
                _id: 6
            },
            {
                img: service_demolicion,
                description: 'Demoliciones',
                tag: "demolicion",
                _id: 7
            },
            {
                img: service_contruccion_general,
                description: 'Construcción General',
                tag: "construccion_general",
                _id: 8
            },
        ]
    }
    handleClick() {
        let w = window
        w.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': 0
        });

    }
    componentDidMount() {
        let w = window;

        w.addEventListener('scroll', () => {

            if (this.servicesContainer) {
                fadeElement(this.servicesContainer)
            }
        })
    }
    render() {
        return (
            <Services >
                <h1 >Nuestro Servicios</h1>
                <div className='Services__description' ref={this.setServicesContainer}>
                    <p>
                        Si necesita que su proyecto de construcción, ya sea de vivienda, empresa o cualquier reforma tenga un alto nivel, con el acabado de mejor calidad necesita un equipo profesional y una solución individualizada.
                    </p>
                    <p>
                        Responsabilidad y garantía total de la obra a realizar. Diseño, planificación y seguimiento constante durante todo el periodo de intervención. Estricto cumplimiento de las normas de seguridad.
                    </p>
                </div>


                <div className='Services__category'>
                    {
                        this.state.items.map(i => {
                            return (
                                <Link to={{
                                    pathname: `/servicios/${i.tag}`
                                }}
                                    key={i._id}
                                    onClick={this.handleClick}
                                >
                                    <ServicesItem data={i} />
                                </Link>
                            )
                        })
                    }
                </div>

            </Services>
        )
    }
}

export default ServicesContainer;