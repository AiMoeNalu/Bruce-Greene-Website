/*
Component which displays individual Social Media Icon with clickable link
*/

import React from 'react';

import './SocialMediaIconLinks.scss';

const SocialMediaIconLinks = ({ id, name, icon, link }) => {
    return(
        <img
        key={id}
        className='clickable social-icons'
        src={require(`../../../assets/img/${icon}`)}
        alt={name}
        onClick={() => window.open(link,"_blank")}/>
    );
}

export default SocialMediaIconLinks;