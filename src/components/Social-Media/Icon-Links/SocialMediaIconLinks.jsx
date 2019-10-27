import React from 'react';

import './SocialMediaIconLinks.scss';

const SocialMediaIconLinks = ({ id, name, icon, link }) => {
    console.log(icon);
    return(
        <img
        key={id}
        className='clickable'
        alt={name}
        src={`${icon}`}
        onClick={() => window.open(link,"_blank")}/>
    );
}

export default SocialMediaIconLinks;