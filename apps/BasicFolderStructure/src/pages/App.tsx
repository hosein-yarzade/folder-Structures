import React from "react";
import ProfileCard from "../components/ProfileCard";
import { useFetchUser } from "../hooks/userFetchUser";

const App: React.FC = () => {
  const { user, loading, error } = useFetchUser();

  if (loading) return <p>Loading user...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <main className="home">
      {user && <ProfileCard name={user.name} bio={user.bio} avatar={user.avatar} />}
    </main>
  );
};

export default App;
