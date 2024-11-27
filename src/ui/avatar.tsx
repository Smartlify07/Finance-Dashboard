import clsx from 'clsx';
import { useState } from 'react';

export interface AvatarProps {
  image: string;
  altText: string;
  width: string;
  height: string;
}

const Avatar = ({ altText, image, width, height }: AvatarProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div
      className={clsx(` rounded-full  `, {
        'bg-secondary animate-pulse ': isLoading,
      })}
      style={{
        height: height,
        width: width,
      }}
    >
      <img
        style={{
          width: width,
          height: height,
        }}
        onLoad={handleImageLoad}
        src={image}
        alt={altText}
        className={`object-cover rounded-full  w-full`}
      />
    </div>
  );
};

export default Avatar;
