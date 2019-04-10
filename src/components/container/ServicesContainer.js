import React, { Component } from 'react';
import Services from '../Services';
import gremio from '../../assets/img/services_category/gremio.svg';
class ServicesContainer extends Component {
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
                    <div className='Services__category-items'>
                        <figure>
                            <img src={gremio} width='100px' height='100px' />
                        </figure>
                        <div className='Services__category-items_title'>
                            <h2>Gremio</h2>
                        </div>
                    </div>
                    <div className='Services__category-items'>
                        <figure>
                            <img src={gremio} width='100px' height='100px' />
                        </figure>
                        <div className='Services__category-items_title'>
                            <h2>Gremio</h2>
                        </div>
                    </div>
                </div>
            </Services>
        )
    }
}

export default ServicesContainer;