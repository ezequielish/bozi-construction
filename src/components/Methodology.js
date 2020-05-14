import React, { Component } from 'react';
import methodologyImg from '../assets/img/methodology.jpg';
import ItemsMethodology from './ItemsMethodology';
class Methodology extends Component {
    render() {
        const { data: methodology } = this.props;

        return (
            <section className='Methodology'>
                <div className='Methodology__image'>
                    <figure>
                        <div className='Methodology__image_decorator'></div>
                        <img src={methodologyImg} />
                    </figure>
                </div>
                <h1>Metodología de trabajo</h1>
                <div className='Methodology__level'>
                    {
                        methodology.map((item, index) => {
                            return (
                                <ItemsMethodology data={item} key={index} />
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Methodology;