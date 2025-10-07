import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="avatar" />;
};

export default Avatar;
