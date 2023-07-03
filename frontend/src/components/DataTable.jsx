import React from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";

const QuestTable = ({ quests, onSort }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  function standardizeSentence(sentence) {
    // Convert the sentence to lowercase and trim any leading or trailing whitespace
    const trimmedSentence = sentence.trim().toLowerCase();

    // Make the first letter uppercase and concatenate it with the rest of the sentence
    const standardizedSentence =
      trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);

    return standardizedSentence;
  }

  const sortTable = () => {
    console.log(quests);
    const sortedData = Object.keys(quests).sort((a, b) => {
      if (sortOrder === "asc") {
        return a[0].localeCompare(b[0]);
      } else {
        return b[0].localeCompare(a[0]);
      }
    });
    onSort(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Table striped bordered hover>
      <thead className="text-blue-200">
        <tr className="border-b-2 border-black border-l border-r border-t">
          <th className=" border-x border-black">Quest Name</th>
          <th className="border-x border-black">Experience</th>
          <th className="border-x border-black px-4">Quest Points</th>
          <th className="border-x border-black">Items</th>
        </tr>
      </thead>
      <tbody className="h-full">
        {Object.keys(quests).map((questName) => {
          const quest = quests[questName];
          return (
            <tr
              key={questName}
              className="border-b-2 border-black text-yellow-200"
            >
              <td className="border-r-2 border-black">
                <a
                  href={`https://oldschool.runescape.wiki/w/${questName}`}
                  target="_blank"
                  className="hover:text-blue-300 hover:underline text-center text-white"
                >
                  {questName}
                </a>
              </td>
              <td className="border-r-2 border-black px-3 py-2">
                {quest.experience.map((exp, index) => (
                  <div key={index}>{standardizeSentence(exp)}</div>
                ))}
                {quest.experience.length === 0 && (
                  <div>No experience awarded</div>
                )}
              </td>
              <td className=" text-center text-white items-center h-full justify-center border-black">
                {quest.questPoints}
              </td>
              <td className="p-3 text-left text-gray-700 border-black border-l-2">
                {quest.items.map((item, index) => (
                  <div className="text-left" key={index}>
                    {standardizeSentence(item)}
                  </div>
                ))}
                {quest.items.length === 0 && (
                  <div className="text-left">No items rewarded </div>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default QuestTable;
