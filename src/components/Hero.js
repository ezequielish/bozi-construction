import React from 'react';
const Hero = (props) => {
    return (
        <section className='hero'>
            {props.children}
        </section>
    )
}

export default Hero;