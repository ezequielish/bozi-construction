import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactContainer from '../components/container/ContactContainer';
import data from '../data/app';
import services from '../data/services';
import HeroServices from '../components/container/HeroServices'
import NotFound from './NotFound';
class Services extends Component {

    render() {
        let tagUrl = this.props.match.params.id
        if (!tagUrl) {
            tagUrl = this.props.location.pathname.split('/servicios/')[1]
            !(tagUrl) ? tagUrl = 'reforma' : null
        }


        const { services: servicios } = services
        let thisService = servicios.filter(service => service.tag == tagUrl)
        if (thisService.length == 0) { //si no obtiene resultado mandamos el not found
            return (
                < NotFound />
            )
        }
        return (
            <Fragment>
                <Header data={data.menu} services={services} history={this.props.history} />
                <HeroServices data={thisService} />
                <ContactContainer />
                <Footer />
            </Fragment>
        )
    }

}

export default Services;