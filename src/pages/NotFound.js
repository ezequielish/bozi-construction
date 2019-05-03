import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import notfound from '../assets/img/404.svg';
class NotFound extends PureComponent {

    handleClick(e) {
        let path = e.target.dataset.hst;
        switch (path) {
            case 'back':
                this.props.history.goBack();
            case 'home':
                this.props.history.push('/')

            default:
                return null
        }
    }
    render() {
        return (
            <div className="pageNotFound">
                <img src={notfound} />
                <h1>Página no encontrada</h1>
                <div className="btn_notfound">
                    <p><button onClick={this.handleClick.bind(this)} data-hst="back" >Volver</button></p>
                    <p><button onClick={this.handleClick.bind(this)} data-hst="home">Ir al incio</button></p>
                </div>
            </div>
        )

    }

}

export default withRouter(NotFound);