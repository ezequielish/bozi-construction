import React from 'react';
import contac from '../assets/img/icons/methodology/contact.svg';
import medicion from '../assets/img/icons/methodology/medicion.svg';
import distribucion from '../assets/img/icons/methodology/distribucion.svg';
import mobiliario from '../assets/img/icons/methodology/mobiliario.svg';
import final from '../assets/img/icons/methodology/final.svg';

import methodology from '../assets/img/methodology.jpg';
const Methodology = (props) => {
    return (
        <section className='Methodology'>
            <div className='Methodology__image'>
                <figure>
                    <div className='About__figure-decorator'></div>
                    <img src={methodology} />
                </figure>
            </div>
            <h1>Metodología de trabajo</h1>
            <div className='Methodology__level'>
                <div className='Methodology__items'>
                    <div className='items-circle'>
                        <img src={contac} width='50%' height='50%' />
                    </div>
                    <div className='line'></div>
                    <div className='items-title'>
                        <p>CONTACTO Y PRESENTACIÓN</p>
                    </div>
                </div>
                <div className='Methodology__items'>
                    <div className='items-circle'>
                        <img src={medicion} width='50%' height='50%' />
                    </div>
                    <div className='line'></div>
                    <div className='items-title'>
                        <p>VISITA Y MEDICIÓN | APUNTES DE DATOS</p>
                    </div>
                </div>
                <div className='Methodology__items'>
                    <div className='items-circle'>
                        <img src={distribucion} width='50%' height='50%' />
                    </div>
                    <div className='line'></div>
                    <div className='items-title'>
                        <p>PROPUESTA DISTRIBUCIÓN + PRESUPUESTO</p>
                    </div>
                </div>
                <div className='Methodology__items'>
                    <div className='items-circle'>
                        <img src={mobiliario} width='50%' height='50%' />
                    </div>
                    <div className='line'></div>
                    <div className='items-title'>
                        <p>PROYECTO | PROPUESTA DE MOBILIARIO Y ACABADOS</p>
                    </div>
                </div>
                <div className='Methodology__items'>
                    <div className='items-circle'>
                        <img src={final} width='50%' height='50%' />
                    </div>
                    <div className='line'></div>
                    <div className='items-title'>
                        <p>FINALIZACIÓN DEL PROYECTO</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Methodology;