import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fadeElement } from '../../assets/js/effects';
import service_cocina from '../../assets/img/services/cocinas.svg';
import service_piscina from '../../assets/img/services/piscina.svg';
import service_pintura from '../../assets/img/services/pintura.svg';
import service_carpinteria from '../../assets/img/services/carpinteria.svg';
import service_solares from '../../assets/img/services/solares.svg';
import service_reforma_integral from '../../assets/img/services/reforma-integral.svg';
import service_demolicion from '../../assets/img/services/demolicion.svg';
import service_contruccion_general from '../../assets/img/services/contruccion-general.svg';
import ServicesItems from '../ServicesItems';
class HeroServices extends Component {
    constructor(props) {
        super(props)
        this.descriptionContent = React.createRef()
        this.state = {
            fadeIn: true,
            imgLoad: false,
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
    }

    loadImg(e) {
        this.setState({ imgLoad: true })
        e.target.style.transition = '.8s';
        e.target.style.opacity = 1;

    }

    handleClickItem(e) {

        let w = window
        let sectionScroll = this.descriptionDiv;
        w.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': (sectionScroll.offsetTop - 300)
        });

        this.setState({ fadeIn: false })
        setTimeout(() => {
            this.setState({ fadeIn: true })
        }, 500);
    }
    componentDidMount() {
        this.descriptionDiv = this.descriptionContent.current;
        this.setState({ fadeIn: true })
        fadeElement(this.descriptionDiv)
    }

    render() {

        const { data: service } = this.props
        return (
            <section className="ServicesHero">

                <figure className="ServicesHero__img_container" >

                    {
                        !this.state.imgLoad &&
                        <div className="loadSpinner">
                            <p>Cargando ...</p>
                        </div>
                    }
                    <img src={service[0].url} style={{ opacity: 0 }} onLoad={this.loadImg.bind(this)} className="ServicesHero__img_hero" />
                </figure>

                <div className="ServicesHero__description_container">
                    <h1>{service[0].title}</h1>

                    <div className="ServicesHero_description preLoad" ref={this.descriptionContent} >

                        {
                            service[0].description.split('\n').map((p, index) => {
                                return <p key={index} className={this.state.fadeIn ? 'loadElement' : 'preLoad'} >{p}</p>
                            })
                        }
                    </div>
                    <div className="ServicesHero_services" >
                        {
                            this.state.items.map(i => {
                                return (
                                    <Link onClick={this.handleClickItem.bind(this)} to={{
                                        pathname: `/servicios/${i.tag}`
                                    }}
                                        key={i._id}

                                    >
                                        <ServicesItems data={i} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }

}

export default HeroServices;