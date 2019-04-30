import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactContainer from '../components/container/ContactContainer';
import data from '../data/app';
import services from '../data/services';
import HeroServices from '../components/container/HeroServices'

class Services extends Component {

    render() {
        let tagUrl = this.props.match.params.id
        const { services:servicios } = services
        let thisService = servicios.filter(service => service.tag == tagUrl)
        return (
            <Fragment>
                 <Header data={data.menu} />
                    <HeroServices data={thisService} />
                    <ContactContainer />
                <Footer />
            </Fragment>
        )
    }

}

export default Services;