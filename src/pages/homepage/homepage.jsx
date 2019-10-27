import React, { Component } from 'react';

import './homepage.scss';

import SocialMediaIconLinks from '../../components/Social-Media/Icon-Links/SocialMediaIconLinks';
import SOCIAL_MEDIA from '../../assets/Social-Media/data';

class Homepage extends Component {

    render() {
        return(
            <div className='homepage'>
                <header>
                    <div className='social-media'>
                        {
                            SOCIAL_MEDIA.map(({id, name, icon, link}) => <SocialMediaIconLinks key={id} name={name} icon={icon} link={link} />)
                        }
                    </div>
                </header>
                <div className="main-content">
               
                </div>
                <footer>

                </footer>
            </div>
        )
    }

}

export default Homepage;