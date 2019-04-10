import React, { Component } from 'react';
import HeroLayout from '../Hero';
import img1 from '../../assets/img/backgrounds/img-1.jpg';
class HeroContainer extends Component {
    render() {
        return (
            <HeroLayout>
                <div className="Hero__title">
                    <h1>CONSTRUCCIONES Y REFORMAS</h1>
                    <h2>Transformamos tus Diseños en Realidad</h2>
                    <p>Los diseños más modernos a tu alcance con los materiales de la mejor calidad</p>
                    <button className='btn-primary'>PEDIR PRESUPUESTO</button>
                </div>
                <div className='Hero__slider'>
                    <div className='Hero__slider-item'>
                        <img src={img1} />
                    </div>

                    <div className='items-icon'>O O O</div>
                </div>
            </HeroLayout>
        )
    }

}

export default HeroContainer;