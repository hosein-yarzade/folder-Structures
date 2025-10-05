import React from "react";

interface ProfileCardProps {
  name: string;
  bio: string;
  avatar: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, bio, avatar }) => {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;
