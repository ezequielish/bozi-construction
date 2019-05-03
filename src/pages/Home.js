import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroContainer from '../components/container/HeroContainer';
import ServicesContainer from '../components/container/ServicesContainer';
import About from '../components/About';
import Methodology from '../components/Methodology';
import ProjectsContainer from '../components/container/ProjectsContainer';
import ContactContainer from '../components/container/ContactContainer';
import data from '../data/app';
import services from '../data/services';
class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header data={data.menu} services={services} history={this.props.history} />
                <HeroContainer data={data.portadas} />
                <ServicesContainer />
                <About />
                <Methodology data={data.methodology} />
                {/* <ProjectsContainer /> */}
                <ContactContainer />
                <Footer />
            </ Fragment>
        )
    }
}

export default Home;