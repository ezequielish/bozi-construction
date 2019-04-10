import React from 'react';
import SocialNetwork from './SocialNetwork';
const Footer = props => {
    return (
        <footer>
            <h5>Bozi Constructora y Reformas</h5>
            <SocialNetwork>
                {props.children}
            </SocialNetwork>
        </footer>
    )
}

export default Footer;