import React, { Component } from 'react';
import Layout from '../components/Layout';
import HeroContainer from '../components/container/HeroContainer';
class Home extends Component {
    render() {
        return (
            <Layout>
                <HeroContainer />
            </Layout>
        )
    }
}

export default Home;