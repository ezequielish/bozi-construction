import React from 'react';
import instagram from '../assets/img/icons/social-network/instagram.svg';
import fb from '../assets/img/icons/social-network/fb.svg';
const SocialNetwork = props => {
    return (
        <div className='SocialNetwork'>
            <img src={instagram} width='20px' height='20px' />
            <img src={fb} width='20px' height='20px' />
        </div>
    )
}

export default SocialNetwork;