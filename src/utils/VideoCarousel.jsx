import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import VideoPlayer from './VideoPlayer'; // Import your VideoPlay

const VideoCarousel = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const videoSources = [
        '/assets/pexels-roman-odintsov-7040278.mp4',
        '/assets/pexels_videos_1722591 (1080p) (1).mp4'
    ]


    return (
        <Carousel showStatus={false} onChange={newIndex => setCurrentVideoIndex(newIndex)} >
            {videoSources.map((src, index) => (
                <div key={index}>
                    <VideoPlayer src={src} isCurrent={index === currentVideoIndex} />
                </div>
            ))}
        </Carousel>
    );
};

export default VideoCarousel;