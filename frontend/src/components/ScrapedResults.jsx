import * as fs from "fs";
import axios from "axios";
import * as cheerio from "cheerio";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
// import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { duoToneForest } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  duotoneDark,
  duotoneForest,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function ScrapedResults(props) {
  console.log(props);
  console.log(props.searchQuest);
  const [quest, setQuest] = useState(props.searchQuest || "Regicide");
  const [renderHtml, setRenderHtml] = useState([]);

  useEffect(() => {
    const data = scrapeWiki(String(quest));
    data.then((result) => {
      setRenderHtml(result);
    });
  }, [quest]);

  const rewardsDisplay = () => {
    if (renderHtml.length === 0) {
      return <div></div>;
    }
    let sanitizedHtml = DOMPurify.sanitize(renderHtml[1]);
    let sanitizedImg = DOMPurify.sanitize(renderHtml[0]);
    console.log(sanitizedImg);
    const codeString = "(num) => num + 1";
    return (
      <div className="flex flex-col">
        HTML for rewards image from OSRS Wiki:
        <SyntaxHighlighter
          language="javascript"
          style={duotoneForest}
          wrapLongLines
          wrapLines
        >
          {sanitizedImg}
        </SyntaxHighlighter>
        HTML for rewards from OSRS Wiki:
        <SyntaxHighlighter language="javascript" style={duotoneDark} wrapLines>
          {sanitizedHtml}
        </SyntaxHighlighter>
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
    const parent = rewardsAnchor.parent("h2");
    const rewardImg = parent.next();
    const ulElement = rewardImg.next();
    if (quest.toLowerCase() === "recipe for disaster") {
      const ulElement = ulElement.next();
    }
    const rewards = [];
    console.log(ulElement.html());
    console.log(rewardImg.html());
    rewards.push(rewardImg.html());
    rewards.push(ulElement.html());
    return rewards;
  } catch (error) {
    console.log(error);
  }
}
