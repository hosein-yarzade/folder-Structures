import React from "react";
import { useUser } from "../../hooks/useUser";
import ProfileCard from "../organisms/ProfileCard.tsx";
import ProfileLayout from "../templates/ProfileLayout.tsx";

const ProfilePage: React.FC = () => {
  const { user, loading, error } = useUser();

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ProfileLayout>
      {user && (
        <ProfileCard
          avatar={user.avatar}
          name={user.name}
          email={user.email}
          bio={user.bio}
        />
      )}
    </ProfileLayout>
  );
};

export default ProfilePage;
