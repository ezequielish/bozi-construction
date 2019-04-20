import React, { Component } from 'react';
import HeroLayout from '../Hero';

import { CSSTransition } from 'react-transition-group';
import { inizialitedCarrusel, change } from '../../assets/js/carrusel';
class HeroContainer extends Component {

    state = {
        carrusel: false,
        countPortada: 0,
        // countMax: 3,
        turns: null
    }

    moveCarrusel(btn) {
        let itemImg = document.querySelectorAll('.slider-item img');
        let circlesCarrusel = document.querySelectorAll('.Hero__circle_carrusel'); //circle btn carrusel
        clearInterval(this.state.turns);
        if (btn.target.dataset.circle == this.state.countPortada) {
            return
        }
        if (btn.target.dataset.circle > this.state.countPortada) {
            this.setState({ countPortada: btn.target.dataset.circle, nextClass: 'displace_right', carrusel: true });
            change(itemImg, circlesCarrusel, btn.target.dataset.circle)
            setTimeout(() => {
                this.setState({ carrusel: false })
            }, 100)
        } else {
            this.setState({ countPortada: btn.target.dataset.circle, nextClass: 'displace_left', carrusel: true });
            change(itemImg, circlesCarrusel, btn.target.dataset.circle)
            setTimeout(() => {
                this.setState({ carrusel: false })
            }, 100)
        }

    }
    componentDidMount() {
        let itemImg = document.querySelectorAll('.slider-item img');
        let circlesCarrusel = document.querySelectorAll('.Hero__circle_carrusel'); //circle btn carrusel

        inizialitedCarrusel(itemImg, circlesCarrusel, this.state.countPortada)

        let count = 0;
        this.setState({
            turns: setInterval(() => {

                this.setState({ countPortada: this.state.countPortada + 1, carrusel: true })
                if (this.state.countPortada >= itemImg.length) { // restart carrusel 
                    this.setState({ countPortada: 0 })
                }

                inizialitedCarrusel(itemImg, circlesCarrusel, this.state.countPortada)
                setTimeout(() => {
                    this.setState({ carrusel: false })
                }, 100)

                if (count >= 8 || (window.innerHeight < 900 && window.scrollY > 424)) { //clean setInterval when scroll > 424px mobile
                    clearInterval(this.state.turns);
                }


                count++
            }, 5000)

        })
    }



    render() {
        const { data: imgPortada } = this.props

        return (
            <HeroLayout>
                <div className="Hero__title">
                    <h1>CONSTRUCCIONES Y REFORMAS</h1>
                    <h2>Transformamos tus Diseños en Realidad</h2>
                    <p>Los diseños más modernos a tu alcance con los materiales de la mejor calidad</p>
                    <button className='btn-primary'>PEDIR PRESUPUESTO</button>
                </div>
                <div className='Hero__slider'>
                    {
                        imgPortada.map((i, index) => {
                            return (
                                <div className='slider-item' key={index}>
                                    <CSSTransition in={this.state.carrusel} timeout={300} classNames={this.state.nextClass}>
                                        <img src={i.url} width='100%' height='100%' alt={i.alt} />
                                    </CSSTransition>
                                </div>
                            )
                        })
                    }

                    <div className='Hero__items_icon'>
                        {
                            imgPortada.map((i, index) => {// 
                                return (<div data-circle={index} className='Hero__circle_carrusel' onClick={this.moveCarrusel.bind(this)}>.</div>)
                            })
                        }

                    </div>
                </div>
            </HeroLayout>
        )
    }

}

export default HeroContainer;