import React from "react";
import { useUser } from "../utils/userContext";

function Navbar() {
  const user = useUser();
  return (
    <nav className="w-[100%] h-[4vh] min-h-[34px] max-h-[40px] bg-gray-600 text-yellow-200 items-center justify-center flex">
      <ul className="flex flex-row w-full items-center justify-between text-[2vh] px-4 text-bold py-1">
        <li className="flex flex-row justify-center items-center gap-2">
          <img className="w-[30px] h-[30px]" src="/questicon.png"></img>
          <a href="/">Rune-it-Back</a>
        </li>
        <li className="">
          <a href="/quester" className="">
            Quester
          </a>
        </li>
        <li>
          <a href="/runescraper">RuneScraper</a>
        </li>
        <li>
          <a href="/aqd">All Quest Data</a>
        </li>
        {!user ? (
          <li>
            <a href="https://rune-it-back-l4p0.onrender.com/oauth2/authorization/google">
               Sign In
            </a>
          </li>
        ) : (
          <li>
           <a href="https://rune-it-back-l4p0.onrender.com/logout">
             Logout
          </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
