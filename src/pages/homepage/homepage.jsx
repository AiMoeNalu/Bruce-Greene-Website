import React from 'react';

import './homepage.scss';

import LiveTwitchFeed from '../../components/live-twitch-feed/live-twitch-feed';

const Homepage = () => (
    <div className='homepage'>
        <div className='bruce-twitch-feed'>
            <LiveTwitchFeed />        
        </div>
    </div>
);

export default Homepage;