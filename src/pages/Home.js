import React, { Component } from 'react';
import Layout from '../components/Layout';
import HeroContainer from '../components/container/HeroContainer';
import ServicesContainer from '../components/container/ServicesContainer';
import About from '../components/About';
import Methodology from '../components/Methodology';
import ProjectsContainer from '../components/container/ProjectsContainer';
import ContactContainer from '../components/container/ContactContainer';
import data from '../data/app';
// console.log(data.portadas)
class Home extends Component {
    render() {
        return (
            <Layout>
                <HeroContainer data={data.portadas} />
                <ServicesContainer />
                <About />
                <Methodology />
                <ProjectsContainer />
                <ContactContainer />
            </Layout>
        )
    }
}

export default Home;