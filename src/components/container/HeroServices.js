import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fadeElement } from '../../assets/js/effects';
import service_1 from '../../assets/img/icons/services_category/reforma.svg';
import service_2 from '../../assets/img/icons/services_category/pintura.svg';
import service_3 from '../../assets/img/icons/services_category/fachada.svg';
import service_4 from '../../assets/img/icons/services_category/bajante.svg';
import service_5 from '../../assets/img/icons/services_category/cerrajeria.svg';
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
        // console.log(service[0].description.split('\n'))
        return (
            <section className="ServicesHero">

                <figure className="ServicesHero__img_container" >
                    {/* <img src={service[0].url} style={{ opacity: 0 }} onLoad={this.imgRef.bind(this)} className="ServicesHero__img_hero" /> */}

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