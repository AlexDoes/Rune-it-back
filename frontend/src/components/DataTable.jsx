import React from "react";
import { Table } from "react-bootstrap";

const QuestTable = ({ quests }) => {
  function standardizeSentence(sentence) {
    // Convert the sentence to lowercase and trim any leading or trailing whitespace
    const trimmedSentence = sentence.trim().toLowerCase();

    // Make the first letter uppercase and concatenate it with the rest of the sentence
    const standardizedSentence =
      trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);

    return standardizedSentence;
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Quest Name</th>
          <th>Experience</th>
          <th>Quest Points</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(quests).map((questName) => {
          const quest = quests[questName];
          return (
            <tr key={questName}>
              <td>
                <a
                  href={`https://oldschool.runescape.wiki/w/${questName}`}
                  target="_blank"
                >
                  {questName}
                </a>
              </td>
              <td>
                {quest.experience.map((exp, index) => (
                  <div key={index}>{standardizeSentence(exp)}</div>
                ))}
              </td>
              <td>{quest.questPoints}</td>
              <td className="text-left">
                {quest.items.map((item, index) => (
                  <div className="text-left" key={index}>
                    - {standardizeSentence(item)}
                  </div>
                ))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default QuestTable;
