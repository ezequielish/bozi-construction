import React, { Component } from 'react';
import HeroLayout from '../Hero';
import { CSSTransition } from 'react-transition-group';
import { inizialitedCarrusel, change } from '../../assets/js/carrusel';
class HeroContainer extends Component {
    constructor(props) {
        super(props)
        this.sliderImg = []
        this.circleCarrousel = []
    }
    state = {
        carrusel: false,
        countPortada: 0,
        turns: null
    }

    moveCarrusel(btn) {
        let itemImg = this.sliderImg;
        let circlesCarrusel = this.circleCarrousel; //circle btn carrusel
        clearInterval(this.state.turns);
        if (btn.target.dataset.circle == this.state.countPortada) {
            return
        }
        if (btn.target.dataset.circle > this.state.countPortada) {
            this.setState({ countPortada: btn.target.dataset.circle, carrusel: true });
            change(itemImg, circlesCarrusel, btn.target.dataset.circle)
            setTimeout(() => {
                this.setState({ carrusel: false })
            }, 100)
        } else {
            this.setState({ countPortada: btn.target.dataset.circle, carrusel: true });
            change(itemImg, circlesCarrusel, btn.target.dataset.circle)
            setTimeout(() => {
                this.setState({ carrusel: false })
            }, 100)
        }

    }
    componentDidMount() {
        let itemImg = this.sliderImg;
        let circlesCarrusel = this.circleCarrousel; //circle btn carrusel

        inizialitedCarrusel(itemImg, circlesCarrusel, this.state.countPortada)

        let count = 0;
        this.setState({
            turns: setInterval(() => {

                this.setState({ countPortada: this.state.countPortada + 1, carrusel: true })
                if (this.state.countPortada >= itemImg.length) { // restart the carousel if the return is greater than the limit
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


    componentWillUnmount() {
        clearInterval(this.state.turns);
    }
    render() {
        const { data: imgPortada } = this.props

        return (
            <HeroLayout>
                <div className="Hero__title">
                    <h1>CONSTRUCCIONES Y REFORMAS</h1>
                    <h2>Transformamos tus Diseños en Realidad</h2>
                    <p>Los diseños más modernos a tu alcance con los materiales de la mejor calidad</p>
                    <button className='btn_primary'>PEDIR PRESUPUESTO</button>
                </div>
                <div className='Hero__slider'   >
                    {
                        imgPortada.map((i, index) => {
                            return (
                                <div className='slider_item' key={index} >
                                    <img src={i.url} width='100%' height='100%' alt={i.alt} ref={itemImg => this.sliderImg[index] = itemImg} />
                                </div>
                            )
                        })
                    }


                </div>
                <div className='Hero__items_icon' >
                    {
                        imgPortada.map((i, index) => {// 
                            return (
                                <div
                                    data-circle={index}
                                    className='Hero__circle_carrusel'
                                    ref={itemCarrousel => this.circleCarrousel[index] = itemCarrousel}
                                    onClick={this.moveCarrusel.bind(this)}
                                >
                                </div>)
                        })
                    }

                </div>
            </HeroLayout>
        )
    }

}

export default HeroContainer;