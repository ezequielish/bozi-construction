import React, { Component } from 'react';
import Services from '../Services';
import { fadeElement, fade } from '../../assets/js/effects'
import { Link } from 'react-router-dom';
import service_1 from '../../assets/img/icons/services_category/reforma.svg';
import service_2 from '../../assets/img/icons/services_category/pintura.svg';
import service_3 from '../../assets/img/icons/services_category/fachada.svg';
import service_4 from '../../assets/img/icons/services_category/bajante.svg';
import service_5 from '../../assets/img/icons/services_category/cerrajeria.svg';
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
                img: service_1,
                description: 'Reformas',
                tag: "reforma",
                _id: 1
            },
            {
                img: service_2,
                description: 'Pinturas',
                tag: "pintura",
                _id: 2
            },
            {
                img: service_3,
                description: 'Fachadas',
                tag: "fachada",
                _id: 3
            },
            {
                img: service_4,
                description: 'Bajantes',
                tag: "bajantes",
                _id: 4
            },
            {
                img: service_5,
                description: 'Cerrajeria',
                tag: "cerrajeria",
                _id: 5
            }
        ]
    }

    componentDidMount() {
        let w = window;

        w.addEventListener('scroll', () => {
            
            if(this.servicesContainer){
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
                                >
                                    <div className='Services__category_items' >
                                        <figure>
                                            <img src={i.img} width='100%' height='100%' />
                                        </figure>
                                        <div className='Services__category_items_title'>
                                            <h3>{i.description}</h3>
                                        </div>
                                    </div>
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