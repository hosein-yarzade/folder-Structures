import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Profile App</p>
    </footer>
  );
};

export default Footer;
