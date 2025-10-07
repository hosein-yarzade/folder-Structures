import React from "react";
import Avatar from "../atoms/Avatar";
import UserInfo from "../molecules/UserInfo";

interface ProfileCardProps {
  avatar: string;
  name: string;
  email: string;
  bio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ avatar, name, email, bio }) => {
  return (
    <div className="profile-card">
      <Avatar src={avatar} alt={name} />
      <UserInfo name={name} email={email} bio={bio} />
    </div>
  );
};

export default ProfileCard;
