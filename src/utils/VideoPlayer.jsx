import React, { useState, useRef , useEffect} from 'react';
import {RiVolumeMuteFill, RiVolumeUpFill} from 'react-icons/ri';

const VideoPlayer = ({ src, isCurrent }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Mute or unmute the video based on the isCurrent prop
    if (isCurrent) {
      videoRef.current.muted = isMuted;
    } else {
      videoRef.current.muted = true;
    }
  }, [isCurrent, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="video-player relative">
      <video ref={videoRef} src={src} controls={false} autoPlay={true} muted={isMuted} className='w-full object-cover h-[600px]' />
      <div className="controls absolute bottom-5 right-10 text-white">
        <button className=' cursor-pointer' onClick={toggleMute}>{isMuted ? <RiVolumeMuteFill className='w-8 h-8' /> : <RiVolumeUpFill className='w-8 h-8' />}</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
