import React from 'react';

import './live-twitch-feed.scss';

import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

const LiveTwitchFeed = () =>(
    <div className='twitch-embed'>
        <ReactTwitchEmbedVideo channel="brucegreene" muted layout="video" />
    </div>
);

export default LiveTwitchFeed;