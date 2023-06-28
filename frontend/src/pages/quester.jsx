import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";

const SAMPLE_QUESTER_DATA = {
  Username: "Tashisama",
  "Number of Quests Completed": 20,
  skillXP: {
    Agility: 0,
    Attack: 4825,
    Construction: 0,
    Cooking: 550,
    Crafting: 775,
    Defence: 1050,
    Farming: 0,
    Fletching: 0,
    Firemaking: 0,
    Fishing: 0,
    Herblore: 325,
    Hitpoints: 0,
    Hunter: 0,
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
            className="w-full border-black flex flex-row gap-1 text-sm items-center justify-center"
          >
            <input
              className="border-black ml-2 w-3 h-3"
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

  const questsCompletedDisplay = () => {
    questsCompleted.sort();
    return questsCompleted.map((quest) => {
      return (
        <div
          key={quest}
          className="w-full border-black flex flex-row gap-1 text-sm items-center justify-center"
        >
          <label className="ml-2 w-full">{quest}</label>
        </div>
      );
    });
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

  const questsToAddDisplay = () => {
    questsToAdd.sort();
    return questsToAdd.map((quest) => {
      {
        return <p key={quest + "Adding"}>{quest}</p>;
      }
    });
  };

  const leftSideMiddle = () => {
    return (
      <div className="w-1/3 h-[96%]">
        <h2 className="text-2xl text-center border-b-2 border-black">
          Quests to add
        </h2>
        <div className="h-full flex flex-col flex-grow justify-between w-full ">
          <div className="h-2/5 min-h-1/4 overflow-auto bg-gray-300 px-2">
            {questsToAddDisplay()}
          </div>
          <div className="h-3/5 border-black outline overflow-auto text-lg flex flex-col w-full">
            <div className="flex-row flex border-black justify-center border-b-2 mb-2 w-full">
              <p className="w-1/2">Quest Points:</p>
              <p
                className={
                  questsToAdd.length > 0 ? `text-blue-400` : `text-black`
                }
              >
                {questsToAdd.reduce((acc, quest) => {
                  return acc + questList[quest].questPoints;
                }, 0)}
              </p>
            </div>
            <div className="grid grid-cols-2 text-sm h-full divide-x divide-black">
              {Object.entries(xpToAdd).map(([skill, xp]) => {
                return (
                  <div
                    className="flex flex-row px-2 justify-between"
                    key={skill}
                  >
                    <p className="w-1/2">{skill}:</p>
                    <p className={`${xp > 0 ? `text-blue-400` : `text-black`}`}>
                      {xp}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const leftSideRight = () => {
    return (
      <div className="w-1/3 h-full border-l border-black">
        <h2 className="text-2xl text-center border-b-2 border-black">
          Quests Completed
        </h2>
        <div className="h-full overflow-auto">{questsCompletedDisplay()}</div>
      </div>
    );
  };

  const formButtons = () => {
    return (
      <div className="w-2/3 h-[20px] items-end justify-evenly flex flex-row bottom-0 absolute border-t border-black border">
        <button className="" type="" onClick={handleSelect}>
          Select All
        </button>
        <button className="" type="" onClick={handleDeselect}>
          Deselect All
        </button>
        <button className="" type="submit">
          Submit
        </button>
      </div>
    );
  };

  const handleDeselect = (e) => {
    e.preventDefault();
    setQuestsToAdd([]);
    setXPToAdd(baseState);
  };
  const handleSelect = (e) => {
    e.preventDefault();
    // setQuestsToAdd(questsAvailable);
    // setXPToAdd(xpAvailable);
  };

  return (
    <div className=" min-h-[80vh] text-sm h-[90vh] max-h-[100vh] border-4 border-red-900 flex flex-row w-full flex-grow">
      <div
        id="leftSide"
        className=" h-full max-h-[100vh] w-[70%] min-h-[80vh] border-green-500 relative border-2 flex-row flex pb-8"
      >
        <div className="h-full">
          <div className="h-full border-r border-black">
            <h2 className="text-2xl text-center border-b-2 border-black">
              Quests Availabe
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full h-[96%]"
            >
              <div className="flex flex-row h-full overflow-hidden border-red-900">
                <div className="h-full overflow-auto">{questListDisplay()}</div>
              </div>
              {formButtons()}
            </form>
          </div>
        </div>
        {leftSideMiddle()}
        {leftSideRight()}
      </div>
      <div
        id="rightSide"
        className=" h-full w-[30%] min-h-[80vh] border-cyan-600 indent-3"
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
          <div className="h-4/5 overflow-auto">{questXpDisplay()}</div>
          {/* <p>Quests Remaining:</p> */}
          {/* <p>Items Rewarded:</p> */}
        </div>
      </div>
    </div>
  );
}
