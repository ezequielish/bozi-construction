import React from 'react';
import instagram from '../assets/img/icons/social-network/instagram.svg';
import fb from '../assets/img/icons/social-network/fb.svg';
const SocialNetwork = props => {
    return (
        <div className='SocialNetwork'>
            <img src={instagram} />
            <img src={fb} />
        </div>
    )
}

export default SocialNetwork;