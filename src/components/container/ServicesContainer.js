import React, { Component } from 'react';
import Services from '../Services';
import { Link } from 'react-router-dom';
import ServicesItem from '../ServicesItems'
import { items } from '../../assets/js/services'
class ServicesContainer extends Component {
    constructor(prosp) {
        super(prosp)
        this.servicesContainer = null
        this.descriptionContent = React.createRef()
    }
    state = {
        carrusel: false,
        showContent: false,
        items: []
    }
    handleClick() {
        let w = window
        w.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': 0
        });

    }
    componentWillMount(){
        this.setState({
            items: items
        })
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
            <Services >
                <h1 >Nuestro Servicios</h1>
                <div className={`Services__description ${this.state.showContent && 'show'}`} ref={this.descriptionContent }>
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