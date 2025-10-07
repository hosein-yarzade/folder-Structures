import React from "react";
import Text from "../atoms/Text";

interface UserInfoProps {
  name: string;
  email: string;
  bio: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, bio }) => (
  <div className="user-info">
    <Text variant="title">{name}</Text>
    <Text variant="subtitle">{email}</Text>
    <Text>{bio}</Text>
  </div>
);

export default UserInfo;
