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
    Defence: 1050,
    Farming: 0,
    Fletching: 0,
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
    Construction: 0,
    Hunter: 0,
    Hitpoints: 0,
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

const SKILLS = [
  "Agility",
  "Attack",
  "Cooking",
  "Crafting",
  "Construction",
  "Defence",
  "Farming",
  "Firemaking",
  "Fishing",
  "Fletching",
  "Herblore",
  "Hunter",
  "Hitpoints",
  "Magic",
  "Mining",
  "Prayer",
  "Ranged",
  "Runecraft",
  "Slayer",
  "Smithing",
  "Strength",
  "Thieving",
  "Woodcutting",
];

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
  const [username, setUsername] = useState(questerData.Username);
  const [questList, setQuestList] = useState([]);
  const [questsToAdd, setQuestsToAdd] = useState([]);
  const [questOptions, setQuestOptions] = useState([]);
  const [xpToAdd, setXPToAdd] = useState(
    SKILLS.reduce((acc, skill) => {
      acc[skill] = 0;
      return acc;
    }, {})
  );

  const baseState = SKILLS.reduce((acc, skill) => {
    acc[skill] = 0;
    return acc;
  }, {});

  useEffect(() => {
    const getQuests = async () => {
      const response = await fetch("/data/AQD_with_sortedXP.json");
      const data = await response.json();
      setQuestList(data);
      setQuestOptions(Object.keys(data));
    };
    getQuests();
  }, []);

  const handleQuestToggle = (quest) => {
    if (questsToAdd.includes(quest)) {
      setQuestsToAdd(questsToAdd.filter((item) => item !== quest));
      Object.entries(questList[quest].experience).forEach((skillXP) => {
        const skillName = titleCase(skillXP[0]);
        const skillXp = Number(skillXP[1].replace(",", ""));
        if (SKILLS.includes(titleCase(skillXP[0]))) {
          xpToAdd[skillName] -= skillXp;
        }
      });
    } else {
      setQuestsToAdd([...questsToAdd, quest]);
      Object.entries(questList[quest].experience).forEach((skillXP) => {
        const skillName = titleCase(skillXP[0]);
        const skillXp = Number(skillXP[1].replace(",", ""));
        console.log(skillName, skillXp);
        if (SKILLS.includes(titleCase(skillXP[0]))) {
          if (xpToAdd[skillName] === undefined) {
            xpToAdd[skillName] = 0;
          }
          xpToAdd[skillName] += skillXp;
        }
      });
    }
  };

  const titleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  };

  const questListDisplay = () => {
    if (questList.length === 0) {
      return <h1>Loading...</h1>;
    }
    return Object.keys(questList)
      .filter((quest) => !questsCompleted.includes(quest))
      .map((quest) => {
        return (
          <div
            key={quest}
            onClick={() => handleQuestToggle(quest)}
            className="w-full border-black flex flex-row gap-1 text-lg items-center justify-center"
          >
            <input
              className="border-black ml-2 w-4 h-4"
              type="checkbox"
              key={quest + "input"}
              value={quest}
              checked={questsToAdd.includes(quest)}
              onChange={() => {}}
            />{" "}
            <label className="ml-2 w-full">{quest}</label>
          </div>
        );
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestsCompleted = [...questsCompleted, ...questsToAdd];
    const newTotalXP = totalXP + Object.values(xpToAdd).reduce((a, b) => a + b);
    const newSkillXP = { ...skillXP };
    Object.keys(xpToAdd).forEach((skill) => {
      newSkillXP[skill] += xpToAdd[skill];
    });
    const newTotalQuestPoints =
      totalQuestPoints +
      questsToAdd.reduce((acc, quest) => {
        return acc + questList[quest].questPoints;
      }, 0);
    setTotalXP(newTotalXP);
    setSkillXP(newSkillXP);
    setTotalQuestPoints(newTotalQuestPoints);
    setQuestsCompleted(newQuestsCompleted);
    setXPToAdd(baseState);
    setQuestsToAdd([]);
  };

  const questXpDisplay = () => {
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
    <div className=" min-h-[80vh] h-[85vh] border-4 flex flex-row w-full">
      <div
        id="leftSide"
        className=" h-[80vh] max-h-[100vh] w-[70%] min-h-[80vh] border-green-500"
      >
        <h2 className="text-2xl text-center border-b-2 border-black">
          Quest List
        </h2>
        <div className="flex flex-col h-full gap-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full h-full border-2 border-black"
          >
            <div className="flex flex-row h-full border-red-900 ">
              <div className="w-1/3 border-black h-full flex flex-col">
                <h2 className="text-2xl text-center border-b-2 border-black">
                  Quests Available
                </h2>
                <div className="h-full overflow-auto">{questListDisplay()}</div>
              </div>
              <div className="w-1/3 h-full">
                <h2 className="text-2xl text-center border-b-2 border-black">
                  Quests to add
                </h2>
                <div className="h-full flex flex-col justify-between w-full border-2 border-red-900">
                  <div className="h-1/4 min-h-1/4 overflow-auto border-black border-2">
                    {questsToAdd.map((quest) => {
                      return <p key={quest + "Adding"}>{quest}</p>;
                    })}
                  </div>
                  <div className="max-h-3/4 overflow-auto border-black border-2">
                    <h2>XP TO GAIN</h2>
                    {Object.entries(xpToAdd).map(([skill, xp]) => {
                      return (
                        <div
                          className="flex flex-row  border-black ml-2 mx-auto"
                          key={skill}
                        >
                          <p className="w-1/2">{skill}</p>
                          <p className="w-1/2">{xp}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="w-1/3 h-full border-l border-black">
                <h2 className="text-2xl text-center border-b-2 border-black">
                  Quests Completed
                </h2>
                {questsCompleted
                  .sort((a, b) => a - b)
                  .map((quest) => {
                    return <p key={quest + "Completed"}>{quest}</p>;
                  })}
              </div>
            </div>
            <div className="w-[90%] h-[5%] items-end justify-evenly flex flex-row bottom-0">
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
        </div>
      </div>
      <div
        id="rightSide"
        className=" h-[80vh] w-[30%] min-h-[80vh] border-cyan-600 indent-3"
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
          <p>XP Distribution:</p>
          {questXpDisplay()}
          {/* <p>Quests Remaining:</p> */}
          {/* <p>Items Rewarded:</p> */}
        </div>
      </div>
    </div>
  );
}
