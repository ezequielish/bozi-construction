import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import './assets/css/style.css'; class App extends Component {

    render() {
        return (

            <Fragment>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/servicios/:id" exact component={Services} />
                </Switch>
            </Fragment>

        )
    }
}

export default App;