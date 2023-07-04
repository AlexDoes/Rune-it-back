import React from "react";

function Navbar() {
  return (
    <nav className="w-[100%] h-[10%]">
      <ul className="flex flex-row w-full border-8 items-center justify-between">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/aqd">All Quest Data</a>
        </li>
        <li>
          <a href="/quester">Quester</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="http://localhost:8080/oauth2/authorization/google">Sign In</a>
        </li>
        <li>
          <a href="http://localhost:8080/logout">Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
