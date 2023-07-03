export default function Home() {
  return (
    <div className="m0-auto w-full h-[94vh] bg-gradient-to-r from-amber-100 to-zinc-600 relative">
      <div>
        <img
          className="w-[10%] h-[10%] ml-32  mx-30 
        "
          src="/gnome.png"
        ></img>
      </div>
      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <img className="w-[65px] h-[65px]" src="/questicon.png"></img>
          <h1 className="text-8xl text-yellow-200">Rune-it-Back</h1>
        </div>

        <div className="text-2xl text-yellow-100 flex flex-col items-center justify-center w-1/2 m-auto z-20">
          <div className="prose-xl ">
            Welcome to Rune-it-Back! This is a collection of tools for the game
            OldSchool Runescape and it's related quests.
            <br />
            Check out the tools below!
            <br />
            <a href="/webscraper">Webscraper</a>
            <br />
            <a href="/quester">Quester</a>
            <br />
            <a href="/aqd">All Quest Data</a>
          </div>
        </div>
      </div>
      <img
        className="absolute right-0 top-1/2 mr-20 w-[300px] h-[300px] z-10"
        src="/oldman.png"
      ></img>
    </div>
  );
}
