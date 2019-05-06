import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import './assets/css/style.css'; class App extends Component {

    render() {
        return (

            <Fragment>
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/" exact exact component={Services} /> */}
                    <Route path="/servicios/:id" component={Services} />
                    <Redirect from="/:id" to="/servicios/:id" />
                    <Route component={NotFound} />
                </Switch>
            </Fragment>

        )
    }
}

export default App;