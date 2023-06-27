import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";

const SAMPLE_QUESTER_DATA = {
  Username: "Tashisama",
  "Number of Quests Completed": 20,
  skillXP: {
    Agility: 0,
    Attack: 4825,
    Cooking: 550,
    Crafting: 775,
    Defense: 1050,
    Farming: 0,
    Firemaking: 0,
    Fishing: 0,
    Herblore: 325,
    Magic: 1125,
    Mining: 1300,
    Prayer: 6625,
    Ranged: 300,
    Runecraft: 0,
    Slayer: 18650,
    Smithing: 1375,
    Strength: 3075,
    Thieving: 2750,
    Woodcutting: 0,
  },
  totalQuestPoints: 65,
  totalXP: 35352,
  "Quests Completed": [
    `Romeo & Juliet`,
    `Cook's Assistant`,
    `Witch's Potion`,
    `Demon Slayer`,
    `Shield of Arrav`,
    `The Restless Ghost`,
    `Ernest the Chicken`,
    `Sheep Shearer`,
    `Pirate's Treasure`,
    `Prince Ali Rescue`,
    `Doric's Quest`,
    `Goblin Diplomacy`,
    `Imp Catcher`,
    `Black Knights' Fortress`,
    `Druidic Ritual`,
    `Witch's House`,
    `Gertrude's Cat`,
    `Rune Mysteries`,
    `Lost City`,
    `Elemental Workshop I`,
  ],
};

export default function Quester(UserData) {
  const [questerData, setQuesterData] = useState(
    UserData.size ? UserData : SAMPLE_QUESTER_DATA
  );
  const [skillXP, setSkillXP] = useState(questerData.skillXP);
  const [totalXP, setTotalXP] = useState(questerData.totalXP);
  const [totalQuestPoints, setTotalQuestPoints] = useState(
    questerData.totalQuestPoints
  );
  const [questsCompleted, setQuestsCompleted] = useState(
    questerData["Quests Completed"]
  );
  const [totalQuests, setTotalQuests] = useState(
    questerData["Number of Quests Completed"]
  );
  const [username, setUsername] = useState(questerData.Username);
  const [questList, setQuestList] = useState([]);
  const [questsToAdd, setQuestsToAdd] = useState([]);

  useEffect(() => {
    const getQuests = async () => {
      const response = await fetch("/data/AQD.json");
      const data = await response.json();
      setQuestList(data);
    };
    getQuests();
  }, []);

  const handleCheckboxChange = (e) => {
    const quest = e.target.value;
    if (e.target.checked) {
      setQuestsToAdd([...questsToAdd, quest]);
    } else {
      setQuestsToAdd(questsToAdd.filter((q) => q !== quest));
    }
    console.log(questsToAdd);
  };

  const questListDisplay = () => {
    if (questList.length === 0) {
      return <h1>Loading...</h1>;
    }
    return Object.keys(questList).map((quest) => {
      return (
        <div className="w-full border-2 border-black flex flex-row gap-2 text-lg">
          <input
            className="border-black border-2"
            type="checkbox"
            key={quest}
            value={quest}
            onChange={handleCheckboxChange}
          />
          <label className="">{quest}</label>
        </div>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const questXpDisplay = () => {
    console.log(Object.keys(skillXP));
    return Object.keys(skillXP).map((skill) => {
      return (
        <div
          className="flex flex-row w-[90%] border-black border-x-2 mx-auto"
          key={skill}
        >
          <p className="w-1/2">{skill}</p>
          <p className="w-1/2">{skillXP[skill]}</p>
        </div>
      );
    });
  };

  return (
    <div className=" min-h-[80vh] border-4 h-full flex flex-row w-full">
      <div
        id="leftSide"
        className="border-2 h-[90vh] max-h-[100vh] w-[60%] min-h-[80vh] border-green-500"
      >
        <h2 className="text-2xl text-center border-b-2 border-black">
          Quest List
        </h2>
        <div className="flex flex-row h-full">
          <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
            <div className="w-full border-2 border-black h-[90%] overflow-auto flex flex-col">
              {questListDisplay()}
            </div>
            <div className="w-[90%] border-2 items-end justify-evenly flex flex-row">
              <button className="" type="">
                Select All
              </button>
              <button className="" type="">
                Deselect All
              </button>
              <button className="" type="submit">
                Submit
              </button>
            </div>
          </form>
          <div className="w-1/3">
            <h2 className="text-2xl text-center border-b-2 border-black">
              Quests to add
            </h2>
            {questsToAdd.map((quest) => {
              return <p>{quest}</p>;
            })}
          </div>
        </div>
      </div>
      <div
        id="rightSide"
        className="border-2 h-full w-[40%] min-h-[80vh] border-cyan-600 indent-3"
      >
        <div className="flex flex-col w-full h-full">
          <h2 className="text-2xl pb-2 w-full justify-center items-center text-center">
            {" "}
            QUESTER STATS
          </h2>
          <p>Username: {username}</p>
          <p>Number of Quests Completed: {questsCompleted.length} </p>
          <p>Total XP Rewarded: {totalXP}</p>
          <p>Quest Points Rewarded: {totalQuestPoints} </p>
          {/* <p>Quests Remaining:</p> */}
          <p>XP Distribution:</p>
          {questXpDisplay()}
          <p>Items Rewarded:</p>
        </div>
      </div>
    </div>
  );
}
