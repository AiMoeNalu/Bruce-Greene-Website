import React from 'react';

import './homepage.scss';

import LiveTwitchFeed from '../../components/live-twitch-feed/live-twitch-feed';

const Homepage = () => (
    <div className='homepage'>
        <LiveTwitchFeed/>        
    </div>
);

export default Homepage;