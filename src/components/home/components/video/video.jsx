import React from 'react';
import './video.css';
import Player from 'griffith'
const sources = {
    hd: {
        play_url: './mp4/hd.mpg',
    },
    sd: {
        play_url: './mp4/sd.mp4',
    },
}

const Video = props => {
    return (
        <div className="video">
            <Player id="video" sources={sources} />
        </div>
    )
}

export default Video;