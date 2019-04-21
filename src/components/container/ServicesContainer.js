import React, { Component } from 'react';
import Services from '../Services';
import service_1 from '../../assets/img/icons/services_category/reforma.svg';
import service_2 from '../../assets/img/icons/services_category/pintura.svg';
import service_3 from '../../assets/img/icons/services_category/fachada.svg';
import service_4 from '../../assets/img/icons/services_category/bajante.svg';
import { CSSTransition } from 'react-transition-group';
let html = document.querySelector('html')
class ServicesContainer extends Component {
    state = {
        carrusel: false,
        items: [
            {
                img: service_1,
                description: 'Reformas'
            },
            {
                img: service_2,
                description: 'Pinturas'
            },
            {
                img: service_3,
                description: 'Fachadas'
            },
            {
                img: service_4,
                description: 'Bajantes'
            }
        ]
    }



    render() {
        return (
            <Services>
                <h1>Nuestro Servicios</h1>
                <div className='Services__description'>
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

                                <div className='Services__category_items' onScroll={this.jeje}>
                                    <figure>
                                        <img src={i.img} width='100%' height='100%' />
                                    </figure>
                                    <div className='Services__category_items_title'>
                                        <h3>{i.description}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </Services>
        )
    }
}

export default ServicesContainer;