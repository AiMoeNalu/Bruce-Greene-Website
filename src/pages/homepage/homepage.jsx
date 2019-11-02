import React from 'react';

import './homepage.scss';

import LiveTwitchFeed from '../../components/live-twitch-feed/live-twitch-feed';
import Donate from '../../components/donate/donate';

const Homepage = () => (
    <div className='homepage'>
        <section className='row-one'>
            <div className='bruce-twitch-feed'>
                <LiveTwitchFeed />        
            </div>
            <div className='donate'>
                <Donate/>
            </div>
        </section>
        <section className='row-two'>
            
        </section>
    </div>
);

export default Homepage;