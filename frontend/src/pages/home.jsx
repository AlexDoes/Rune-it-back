import React, { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/userinfo", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserInfo();
  }, []);
  console.log(user);
  return (
    <div className="m-auto w-full h-[97vh] bg-gradient-to-r from-amber-100 to-zinc-600 relative flex flex-row items-center scrollbar-thin">
      <div className="w-1/4 flex items-center justify-center">
        <img
          className="w-[50%] h-[10%]  
        "
          // src="/gnomechild.png"
          src="/gnome.png"
        ></img>
      </div>
      <div className="w-1/2 flex flex-col gap-4 justify-center items-center border border-slate-400 rounded-xl p-4">
        <div className="flex flex-row items-center gap-2 w-full">
          <img className="w-[65px] h-[65px]" src="/questicon.png"></img>
          <h1 className="text-8xl text-yellow-200">Rune-it-Back</h1>
        </div>
        <div className="text-2xl text-yellow-100 flex flex-col m-auto z-20 w-full">
          <div className="prose-xl ">
            Welcome to Rune-it-Back! This is a collection of tools for the game
            OldSchool Runescape and it's related quests.
            <br />
            Check out the tools below!
            <br />
            <a
              className="text-green-600 hover:text-white hover:underline"
              href="/webscraper"
            >
              Webscraper
            </a>
            <br />
            <a
              className="text-purple-500 hover:text-white hover:underline"
              href="/quester"
            >
              Quester
            </a>
            <br />
            <a
              className="text-cyan-600 hover:text-white hover:underline"
              href="/aqd"
            >
              All Quest Data
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/ flex justify-center items-center">
        <img
          className="right-0 top-1/2 w-[50%] h-[40%] z-10"
          src="/oldman.png"
        ></img>
      </div>
    </div>
  );
}
