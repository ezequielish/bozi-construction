import React from 'react';
const Hero = (props) => {
    return (
        <section className='Hero'>
            {props.children}
        </section>
    )
}

export default Hero;