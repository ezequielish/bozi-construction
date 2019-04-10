import React, { Component } from 'react';
import Projects from '../Projects';
class ProjectsContainer extends Component {
    render() {
        return (
            <Projects>
                <h1>Últimos Trabajos</h1>
                <div className='Projects__items'>
                    <div className='Projects__items-card'>
                        <div className='Projects__items-card_img'>
                            <img />
                        </div>
                        <div className='Projects__items-card_description'>
                            <h2>Nombre proyecto</h2>
                            <div className='Projects__items-card_description_colors'>

                            </div>
                            <div className='Projects__items-card_description_resenia'>
                                <p> lorem ipsum </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Projects>
        )
    }
}

export default ProjectsContainer;