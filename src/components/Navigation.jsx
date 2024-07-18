import React from "react";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between mx-auto">
      <div>
        <img src="../../public/logo.png" alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
