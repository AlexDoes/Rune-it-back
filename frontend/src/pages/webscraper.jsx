import { useState, useEffect } from "react";
import * as cheerio from "cheerio";
import axios from "axios";
import SearchBar from "../components/Searchbar";
import ScrapedResults from "../components/ScrapedResults";

export default function RuneScraper() {
  const [rewards, setRewards] = useState([]);
  const [scrapeTerm, setScrapeTerm] = useState("");

  const onSearch = (searchTerm) => {
    setScrapeTerm(searchTerm);
  };

  return (
    <div className="w-full flex flex-col items-center pt-4 gap-3 bg-gradient-to-r from-orange-50 to-slate-200 flex-grow h-inherit min-h-[94vh]">
      <div className="prose prose-zinc lg:prose-lg w-full border-black border rounded-xl p-4">
        Search for a quest to see its rewards. This page uses Cheerio to scrape
        the RuneScape Wiki for quest rewards. References an anchor tag and pulls
        relevant text from the next sibling to display the rewards.
      </div>
      <div className="w-[60%]">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="w-[60%]">
        <ScrapedResults
          searchQuest={scrapeTerm ? scrapeTerm : ""}
          key={scrapeTerm}
        />
      </div>
    </div>
  );
}
