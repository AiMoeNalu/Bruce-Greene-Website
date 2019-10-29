import React, { Component } from 'react';

import './homepage.scss';

import SocialMediaNav from '../../components/Social-Media/Social-Media-Nav/SocialMediaNav';

class Homepage extends Component {

    render() {
        return(
            <div className='homepage'>
                <header>
                    <div className="header-components left-side-component">
                        <SocialMediaNav/>
                    </div>
                    <div className='header-components bruce-logo'>
                        <img src={require('../../assets/img/littlebrucebig.png')} alt='littlebruciebig' height='150px'/>
                    </div>
                    <div className='header-components right-side-component'>
                        Login {/**To-Do: CREATE NAV-BAR-MENU (ie: Login, Donate, etc ) */}
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