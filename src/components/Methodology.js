import React from 'react';
import contac from '../assets/img/icons/methodology/contact.svg';
import methodology from '../assets/img/methodology.jpg';
const Methodology = (props) => {
    return (
        <section className='Methodology'>
            <h1>Metodología de trabajo</h1>
            <div className='Methodology__level'>
                <div className='Methodology__items'>
                    <div className='Methodology__items-item'>
                        <div className='Methodology__items-title'>
                            <p>CONTACTO Y PRESENTACIÓN</p>
                        </div>
                        <div className='Methodology__items-circle'>
                            <img src={contac} />
                        </div>
                    </div>
                    <div className='Methodology__items-item'>
                        <div className='Methodology__items-title'>
                            <p>VISITA Y MEDICIÓN | APUNTES DE DATOS</p>
                        </div>
                        <div className='Methodology__items-circle'>
                            <img />
                        </div>
                    </div>
                    <div className='Methodology__items-item'>
                        <div className='Methodology__items-title'>
                            <p>PROPUESTA DISTRIBUCIÓN + PRESUPUESTO</p>
                        </div>
                        <div className='Methodology__items-circle'>
                            <img />
                        </div>
                    </div>
                </div>
                <div className='Methodology__image'>
                    <figure>
                        <div className='About__figure-decorator'></div>
                        <img src={methodology} />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Methodology;