import React from 'react';

import './live-twitch-feed.scss';

import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

const LiveTwitchFeed = () =>(
    <ReactTwitchEmbedVideo channel="brucegreene" />
);

export default LiveTwitchFeed;