import * as fs from "fs";
import axios from "axios";
import * as cheerio from "cheerio";
import { useState, useEffect } from "react";
export default function ScrapedResults(props) {
  console.log(props);
  console.log(props.searchQuest);
  const [quest, setQuest] = useState(props.searchQuest || "Regicide");
  const [renderHtml, setRenderHtml] = useState("");

  useEffect(() => {
    const data = scrapeWiki(String(quest));
    data.then((result) => {
      console.log(result);
      setRenderHtml(result);
    });
  }, [quest]);

  return <>{renderHtml}</>;
}

async function scrapeWiki(quest) {
  const url =
    "https://oldschool.runescape.wiki/w/" +
    encodeURIComponent(quest.replace("'", "%27").replace(" ", "_"));

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let rewardsAnchor = $("#Rewards");
    if (rewardsAnchor.length === 0) {
      rewardsAnchor = $("#Reward");
    }
    const parent = rewardsAnchor.parent("h2");
    const rewardImg = parent.next();
    const ulElement = rewardImg.next();
    if (quest.toLowerCase() === "recipe for disaster") {
      const ulElement = ulElement.next();
    }
    const rewards = [];
    console.log(rewards);
    return rewards;
  } catch (error) {
    console.log(error);
  }
}
