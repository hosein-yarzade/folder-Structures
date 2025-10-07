import React from "react";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default ProfileLayout;
