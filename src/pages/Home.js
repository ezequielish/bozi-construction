import React, { Component } from 'react';
import Layout from '../components/Layout';
import HeroContainer from '../components/container/HeroContainer';
import ServicesContainer from '../components/container/ServicesContainer';
import About from '../components/About';
import Methodology from '../components/Methodology';
class Home extends Component {
    render() {
        return (
            <Layout>
                <HeroContainer />
                <ServicesContainer />
                <About />
                <Methodology />
            </Layout>
        )
    }
}

export default Home;