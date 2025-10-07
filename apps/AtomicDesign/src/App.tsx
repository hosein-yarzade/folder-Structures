import React from "react";
import ProfilePage from "./components/pages/ProfilePage";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>👩‍💻 User Profile (Atomic + TS)</h1>
      <ProfilePage />
    </div>
  );
};

export default App;
