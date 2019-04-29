import React, { Component } from 'react';

class Services extends Component {

    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                Soy un servicio <h1>{this.props.match.params.id}</h1>
            </div>

        )
    }

}

export default Services;