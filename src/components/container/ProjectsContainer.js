import React, { Component } from 'react';
import Projects from '../Projects';
import imgwp from '../../assets/img/wp/wp.jpeg';
import imgwp2 from '../../assets/img/wp/wp-3.jpeg';
import star from '../../assets/img/icons/star.svg';
import arrowLeft from '../../assets/img/icons/arrow-left.svg';
import arrowRight from '../../assets/img/icons/arrow-right.svg';
import '../../assets/js/arrow';
class ProjectsContainer extends Component {

    render() {
        return (
            <Projects>
                <h1>Últimos Trabajos</h1>
                <div className='Projects__items'>

                    <div className='Projects__items_card'>
                        <figure className='Projects__items_card_img'>
                            <img src={imgwp} width='100%' height='100%' />
                        </figure>
                        <div className='items-description'>
                            <h3>Nombre proyecto</h3>
                            <div className='items-description-colors'>

                            </div>
                            <div className='items-p'>
                                <p> Referencia del cliente </p>
                                <div className='stars'>

                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                </div>
                                <span>5 / 5</span>
                            </div>
                        </div>

                    </div>
                    <div className='Projects__items_card'>
                        <figure className='Projects__items_card_img'>
                            <img src={imgwp} width='100%' height='100%' />
                        </figure>
                        {/* <div className='items-description'>
                            <h3>Nombre proyecto</h3>
                            <div className='items-description-colors'>

                            </div>
                            <div className='items-p'>
                                <p> Referencia del cliente </p>
                                <div className='stars'>

                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                </div>
                                <span>5 / 5</span>
                            </div>
                        </div> */}
                    </div>
                    <div className='Projects__items_card'>
                        <figure className='Projects__items_card_img'>
                            <img src={imgwp} width='100%' height='100%' />
                        </figure>
                        {/* <div className='items-description'>
                            <h3>Nombre proyecto</h3>
                            <div className='items-description-colors'>

                            </div>
                            <div className='items-p'>
                                <p> Referencia del cliente </p>
                                <div className='stars'>

                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                </div>
                                <span>5 / 5</span>
                            </div>
                        </div> */}
                    </div>
                    <div className='Projects__items_card'>
                        <figure className='Projects__items_card_img'>
                            <img src={imgwp} width='100%' height='100%' />
                        </figure>
                        {/* <div className='items-description'>
                            <h3>Nombre proyecto</h3>
                            <div className='items-description-colors'>

                            </div>
                            <div className='items-p'>
                                <p> Referencia del cliente </p>
                                <div className='stars'>

                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                </div>
                                <span>5 / 5</span>
                            </div>
                        </div> */}
                    </div>
                    <div className='Projects__items_card'>
                        <figure className='Projects__items_card_img'>
                            <img src={imgwp} width='100%' height='100%' />
                        </figure>
                        {/* <div className='items-description'>
                            <h3>Nombre proyecto</h3>
                            <div className='items-description-colors'>

                            </div>
                            <div className='items-p'>
                                <p> Referencia del cliente </p>
                                <div className='stars'>

                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                </div>
                                <span>5 / 5</span>
                            </div>
                        </div> */}
                    </div>
                    <div className='Projects__items_card'>
                        <figure className='Projects__items_card_img'>
                            <img src={imgwp} width='100%' height='100%' />
                        </figure>
                        {/* <div className='items-description'>
                            <h3>Nombre proyecto</h3>
                            <div className='items-description-colors'>

                            </div>
                            <div className='items-p'>
                                <p> Referencia del cliente </p>
                                <div className='stars'>

                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                </div>
                                <span>5 / 5</span>
                            </div>
                        </div> */}
                    </div>
                    <div className='Projects__items_card'>
                        <figure className='Projects__items_card_img'>
                            <img src={imgwp} width='100%' height='100%' />
                        </figure>
                        {/* <div className='items-description'>
                            <h3>Nombre proyecto</h3>
                            <div className='items-description-colors'>

                            </div>
                            <div className='items-p'>
                                <p> Referencia del cliente </p>
                                <div className='stars'>

                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                </div>
                                <span>5 / 5</span>
                            </div>
                        </div> */}
                    </div>
                    <div className='Projects__items_card'>
                        <figure className='Projects__items_card_img'>
                            <img src={imgwp} width='100%' height='100%' />
                        </figure>
                        {/* <div className='items-description'>
                            <h3>Nombre proyecto</h3>
                            <div className='items-description-colors'>

                            </div>
                            <div className='items-p'>
                                <p> Referencia del cliente </p>
                                <div className='stars'>

                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                </div>
                                <span>5 / 5</span>
                            </div>
                        </div> */}
                    </div>
                    <div className='Projects__items_card'>
                        <figure className='Projects__items_card_img'>
                            <img src={imgwp2} width='100%' height='100%' />
                        </figure>
                        {/* <div className='items-description'>
                            <h3>Nombre proyecto</h3>
                            <div className='items-p'>
                                <p> Referencia del cliente </p>
                                <div className='stars'>
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                    <img src={star} width='100%' height='100%' />
                                </div>
                                <span>5 / 5</span>
                            </div>
                        </div> */}
                    </div>

                </div>
                <div className="arrows">
                    <img src={arrowLeft} className="arrow" width="30px" height="30px" data-arrow="left" />
                    <img src={arrowRight} className="arrow" width="30px" height="30px" data-arrow="right" />
                </div>
            </Projects>
        )
    }
}

export default ProjectsContainer;
