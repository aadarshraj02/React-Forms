import React from "react";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between mx-auto px-10 py-5">
      <div>
        <img src="../../public/logo.png" alt="" />
      </div>
      <ul className="flex items-center gap-10 font-bold">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
