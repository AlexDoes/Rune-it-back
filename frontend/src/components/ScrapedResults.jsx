import * as fs from "fs";
import axios from "axios";
import * as cheerio from "cheerio";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  duotoneDark,
  duotoneForest,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ScrapedResults(props) {
  const [quest, setQuest] = useState(props.searchQuest || "");
  const [renderHtml, setRenderHtml] = useState([]);

  useEffect(() => {
    if (props.searchQuest.length > 0) {
      const data = scrapeWiki(String(quest));
      data.then((result) => {
        setRenderHtml(result);
      });
    }
  }, [quest]);

  console.log(renderHtml[2]);

  const rewardsDisplay = () => {
    if (renderHtml === undefined || renderHtml.length === 0) {
      return <div></div>;
    }
    return (
      <div className="flex flex-col">
        HTML for rewards image from OSRS Wiki:
        <SyntaxHighlighter
          language="javascript"
          style={duotoneForest}
          wrapLongLines
          wrapLines
        >
          {renderHtml[0]}
        </SyntaxHighlighter>
        HTML for rewards from OSRS Wiki:
        <SyntaxHighlighter language="javascript" style={duotoneDark} wrapLines>
          {renderHtml[1]}
        </SyntaxHighlighter>
        <img src={`https://oldschool.runescape.wiki/` + renderHtml[2]} />
      </div>
    );
  };

  return <>{rewardsDisplay()}</>;
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
    const rewards = [];
    const parent = rewardsAnchor.parent("h2");
    const rewardImg = parent.next();
    const imgSrc = rewardImg.find("img").attr("src");
    rewards.push(rewardImg.html());
    let ulElement = rewardImg.next();
    if (quest.toLowerCase() === "recipe for disaster") {
      ulElement = parent.next().next().next();
    }
    rewards.push(ulElement.html());
    rewards.push(imgSrc);
    return rewards;
  } catch (error) {
    console.log(error);
  }
}
