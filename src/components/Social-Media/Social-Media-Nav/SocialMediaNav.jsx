import React from 'react';

import './SocialMediaNav';

import SocialMediaIconLinks from '../Icon-Links/SocialMediaIconLinks';
import SOCIAL_MEDIA from '../../../assets/Social-Media/data';

const SocialMediaNav = () =>(
    <div className='social-media'>
        {
            SOCIAL_MEDIA.map(({id, name, icon, link}) => <SocialMediaIconLinks key={id} name={name} icon={icon} link={link} />)
        }
    </div>
);

export default SocialMediaNav;