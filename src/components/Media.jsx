import Image from 'next/image';
import React from 'react';



const Media = ({
  data,
  className,
  fill,
	priority = false,

  autoPlay = false,
  muted = false,
  loop = false,
  controls = false,

}) => {
  const { mimeType, url, alt } = data || {};

  if (mimeType?.includes('video')) {
    return (
      <video
        className={className}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
      >
        <source src={url} />
      </video>
    );
  }

  return (
    <Image
			priority={priority}
      className={className}
      src={url}
      alt={alt || 'Media'}
      fill={fill}
    />
  );
};

export default Media;