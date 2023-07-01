import React from "react";

function Navbar() {
  return (
    <nav className="w-[100%] h-[10%] bg-gray-600 text-yellow-200">
      <ul className="flex flex-row w-full items-center justify-between text-[15px] px-4 text-bold py-1">
        <li className="flex flex-row justify-center items-center gap-2">
          <img className="w-[30px] h-[30px]" src="/questicon.png"></img>
          <a href="/">Rune-it-Back</a>
        </li>
        <li>
          <a href="/quester">Quester</a>
        </li>
        <li>
          <a href="/webscraper">RuneScraper</a>
        </li>
        <li>
          <a href="/aqd">All Quest Data</a>
        </li>
        <li>
          <a href="/signin">Signin</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
