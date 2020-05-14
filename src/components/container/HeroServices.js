import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading'
import ServicesItems from '../ServicesItems';
import { items } from '../../assets/js/services'

class HeroServices extends Component {
    constructor(props) {
        super(props)
        this.descriptionContent = React.createRef()
        this.state = {
            fadeIn: true,
            imgLoad: false,
            items: []
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

    componentWillMount(){
        this.setState({
            items: items
        })
    }
    render() {

        const { data: service } = this.props
        return (
            <section className="ServicesHero">

                <figure className="ServicesHero__img_container" >

                    {
                        !this.state.imgLoad &&
                        <div className="loadSpinner">
                            <Loading />
                        </div>
                    }
                    <img src={service[0].url} style={{ opacity: 0 }} onLoad={this.loadImg.bind(this)} className="ServicesHero__img_hero" />
                </figure>

                <div className="ServicesHero__description_container">
                    <h1>{service[0].title}</h1>

                    <div className="ServicesHero_description" ref={this.descriptionContent} >

                        {
                            service[0].description.split('\n').map((p, index) => {
                                return <p key={index}>{p}</p>
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