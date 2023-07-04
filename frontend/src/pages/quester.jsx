import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import { useUser } from "../utils/userContext";

const SAMPLE_QUESTER_DATA3 = {
  Username: "Tashisama",
  "Number of Quests Completed": 0,
  skillXP: {
    Agility: 0,
    Attack: 0,
    Construction: 0,
    Cooking: 0,
    Crafting: 0,
    Defence: 0,
    Farming: 0,
    Fletching: 0,
    Firemaking: 0,
    Fishing: 0,
    Herblore: 0,
    Hitpoints: 0,
    Hunter: 0,
    Magic: 0,
    Mining: 0,
    Prayer: 0,
    Ranged: 0,
    Runecraft: 0,
    Slayer: 0,
    Smithing: 0,
    Strength: 0,
    Thieving: 0,
    Woodcutting: 0,
  },
  totalQuestPoints: 0,
  totalXP: 0,
  "Quests Completed": [],
};

const sampleDATA = {
  id: "64a47bcd5e2e6e3a2b585be6",
  username: "Null User",
  email: "NULLER@gmail.com",
  totalXP: 0,
  totalQuestPoints: 0,
  completedQuests: [],
  inProgressQuests: [],
  notStartedQuests: [],
  skillXP: null,
  defence: 0,
  strength: 0,
  fletching: 0,
  slayer: 0,
  farming: 0,
  construction: 0,
  mining: 0,
  smithing: 0,
  fishing: 0,
  attack: 0,
  woodcutting: 0,
  agility: 0,
  herblore: 0,
  thieving: 0,
  hunter: 0,
  ranged: 0,
  prayer: 0,
  magic: 0,
  runecraft: 0,
  hitpoints: 0,
  crafting: 0,
  cooking: 0,
  firemaking: 0,
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
  const [questerData, setQuesterData] = useState(sampleDATA);
  const user = useUser();
  const [added, setAdded] = useState(false);
  const [skillXP, setSkillXP] = useState({
    Agility: questerData.agility, // 1
    Attack: questerData.attack, // 2
    Construction: questerData.construction, // 3
    Cooking: questerData.cooking, // 4
    Crafting: questerData.crafting, // 5
    Defence: questerData.defence, // 6
    Farming: questerData.farming, // 7
    Fletching: questerData.fletching, // 8
    Firemaking: questerData.firemaking, // 9
    Fishing: questerData.fishing, // 10
    Herblore: questerData.herblore, // 11
    Hitpoints: questerData.hitpoints, // 12
    Hunter: questerData.hunter, // 13
    Magic: questerData.magic, // 14
    Mining: questerData.mining, // 15
    Prayer: questerData.prayer, // 16
    Ranged: questerData.ranged, // 17
    Runecraft: questerData.runecraft, // 18
    Slayer: questerData.slayer, // 19
    Smithing: questerData.smithing, // 20
    Strength: questerData.strength, // 21
    Thieving: questerData.thieving, // 22
    Woodcutting: questerData.woodcutting, // 23
  });
  const [totalXP, setTotalXP] = useState(questerData.totalXP);
  const [totalQuestPoints, setTotalQuestPoints] = useState(
    questerData.totalQuestPoints
  );
  const [questsCompleted, setQuestsCompleted] = useState(
    questerData["completedQuests"]
  );
  const [username, setUsername] = useState(questerData.email);
  const [questList, setQuestList] = useState([]);
  const [questsToAdd, setQuestsToAdd] = useState([]);
  const [questOptions, setQuestOptions] = useState([]);
  const [qpToGain, setQPToGain] = useState(0);
  const [xpToAdd, setXPToAdd] = useState(
    SKILLS.reduce((acc, skill) => {
      acc[skill] = 0;
      return acc;
    }, {})
  );
  const [xpAdded, setXPAdded] = useState(
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

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/userinfo", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        setQuesterData(data);
        setUsername(data.email);
        setTotalXP(data.totalXP);
        setTotalQuestPoints(data.totalQuestPoints);
        setQuestsCompleted(data.completedQuests);
        setSkillXP({
          Agility: data.agility, // 1
          Attack: data.attack, // 2
          Construction: data.construction, // 3
          Cooking: data.cooking, // 4
          Crafting: data.crafting, // 5
          Defence: data.defence, // 6
          Farming: data.farming, // 7
          Fletching: data.fletching, // 8
          Firemaking: data.firemaking, // 9
          Fishing: data.fishing, // 10
          Herblore: data.herblore, // 11
          Hitpoints: data.hitpoints, // 12
          Hunter: data.hunter, // 13
          Magic: data.magic, // 14
          Mining: data.mining, // 15
          Prayer: data.prayer, // 16
          Ranged: data.ranged, // 17
          Runecraft: data.runecraft, // 18
          Slayer: data.slayer, // 19
          Smithing: data.smithing, // 20
          Strength: data.strength, // 21
          Thieving: data.thieving, // 22
          Woodcutting: data.woodcutting, // 23
        });
      } catch (err) {}
    };
    getUserInfo();
  }, []);

  const handleQuestToggle = (quest) => {
    if (questsToAdd === []) {
      setXPToAdd(baseState);
    }
    if (questsToAdd.includes(quest)) {
      setQuestsToAdd(questsToAdd.filter((item) => item !== quest));
      Object.entries(questList[quest].experience).forEach((skillXP) => {
        const skillName = titleCase(skillXP[0]);
        const skillXp = Number(skillXP[1].replace(",", ""));
        if (SKILLS.includes(titleCase(skillXP[0]))) {
          xpToAdd[skillName] -= skillXp;
        }
        setQPToGain(qpToGain - questList[quest].questPoints);
      });
    } else {
      setQuestsToAdd([...questsToAdd, quest]);
      addXpToGain(quest);
      addQpToGain(quest);
    }
  };

  const addQpToGain = (quest) => {
    let newQp = qpToGain + Number(questList[quest].questPoints);
    setQPToGain(newQp);
  };

  const addXpToGain = (quest) => {
    Object.entries(questList[quest].experience).forEach((skillXP) => {
      const skillName = titleCase(skillXP[0]);
      const skillXp = Number(skillXP[1].replace(",", ""));
      if (SKILLS.includes(titleCase(skillXP[0]))) {
        if (xpToAdd[skillName] === undefined) {
          xpToAdd[skillName] = 0;
        }
        xpToAdd[skillName] += skillXp;
      }
    });
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
      return (
        <div className="w-full text-2xl">
          <p>Loading quest data...</p>
        </div>
      );
    }
    if (questsCompleted.length === 156 || questsCompleted.length === 166) {
      return (
        <div className="w-full text-xl text-center h-full items-center justify-center flex flex-col text-yellow-200 bg-gray-400">
          <p>All quests completed!</p>
          <p>Congratulations on your quest cape!</p>
        </div>
      );
    }
    return Object.keys(questList)
      .filter((quest) => !questsCompleted.includes(quest))
      .map((quest) => {
        return (
          <div
            key={quest}
            onClick={() => handleQuestToggle(quest)}
            className={`w-full border-black flex flex-row gap-1 text-sm items-center justify-center hover:backdrop-brightness-90
            cursor-pointer ${
              questsToAdd.includes(quest) ? "backdrop-brightness-95" : ""
            }`}
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (questsToAdd.length === 0) {
      return;
    }
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
    setXPAdded(xpToAdd);

    const newObject = {
      completedQuests: newQuestsCompleted,
      totalXP: newTotalXP,
      totalQuestPoints: newTotalQuestPoints,
    };
    Object.entries(newSkillXP).forEach(([skillname, xp]) => {
      newObject[skillname.toLowerCase()] = Math.trunc(xp);
    });
    try {
      const res = await fetch("http://localhost:8080/api/updateuserinfo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObject),
        credentials: "include",
      });
    } catch (err) {}
    setXPToAdd(baseState);
    setQPToGain(0);
    setQuestsToAdd([]);
    setAdded(true);
  };

  const handleRemove = (quest) => {
    setQuestsCompleted(questsCompleted.filter((item) => item !== quest));
    Object.entries(questList[quest].experience).forEach((skillXP) => {
      const skillName = titleCase(skillXP[0]);
      const skillXp = Number(skillXP[1].replace(",", ""));
      if (SKILLS.includes(titleCase(skillXP[0]))) {
        xpToAdd[skillName] -= skillXp;
      }
    });
  };

  const questsCompletedDisplay = () => {
    questsCompleted.sort();
    return questsCompleted.map((quest) => {
      return (
        <div
          key={quest}
          className="w-full border-black flex flex-row gap-1 text-sm items-center justify-center group"
        >
          <label className="ml-2 w-full">{quest}</label>
          {/* <div
            className="group-hover:block hidden hover:text-blue-300 cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => handleRemove(quest)}
          >
            Remove
          </div> */}
        </div>
      );
    });
  };

  const questXpDisplay = () => {
    return Object.keys(skillXP).map((skill) => {
      return (
        <div className="flex flex-row w-[90%] mx-auto" key={skill}>
          <p className="w-1/3">{skill}</p>
          <p className="w-1/3 text-end">
            {Math.trunc(skillXP[skill]).toLocaleString()}
          </p>
          {xpAdded[skill] !== 0 && (
            <p
              className={xpAdded[skill] > 0 ? "text-green-200" : "text-red-300"}
            >
              {xpAdded[skill] > 0 ? "+" : ""}(
              {Math.trunc(xpAdded[skill]).toLocaleString()})
            </p>
          )}
        </div>
      );
    });
  };

  const questsToAddDisplay = () => {
    questsToAdd.sort();
    if (questsCompleted.length === 156 || questsCompleted.length === 166) {
      return (
        <div className="w-full text-xl text-center h-full items-center justify-center flex flex-col text-yellow-200 bg-gray-400">
          <p>All quests completed!</p>
        </div>
      );
    }
    if (questsToAdd.length === 0) {
      return (
        <div className="w-full text-xl">
          {!user && <p className="">Sign in to save your quest progress!</p>}
          <p>No quests selected.</p>
          <p>Select quests to add.</p>
          <p>Below are stats you'll gain from questing.</p>
        </div>
      );
    }
    return questsToAdd.map((quest) => {
      {
        return <p key={quest + "Adding"}>{quest}</p>;
      }
    });
  };

  const leftSideMiddle = () => {
    return (
      <div className="w-1/2 h-[97%]">
        <h2 className="text-2xl text-center border-b-2 border-black">
          Quests to Add
        </h2>
        <div className="h-full flex flex-col flex-grow w-full ">
          <div className="h-2/5 min-h-1/4 overflow-auto bg-slate-400 text-yellow-200 px-2">
            {questsToAddDisplay()}
          </div>
          <div className="h-3/5 border-black overflow-auto text-lg flex border flex-col w-full">
            <div className="flex-row flex border-black justify-center border-b-2 mb-2 w-full">
              <p className="w-1/2">Quest Points:</p>
              <p
                className={
                  questsToAdd.length > 0 ? `text-blue-400` : `text-black`
                }
              >
                {qpToGain}
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-12 grid-flow-row-dense text-sm h-full divide-black">
              {Object.entries(xpToAdd).map(([skill, xp]) => {
                return (
                  <div
                    className="flex flex-row px-2 justify-between"
                    key={skill}
                  >
                    <p className="w-1/2">{skill}:</p>
                    <p
                      className={`${xp > 0 && `text-blue-400`} ${
                        xp < 0 && `text-red-300`
                      }`}
                    >
                      {Math.trunc(xp).toLocaleString()}
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
      <div className="w-1/3 h-[96vh] border-l border-b border-black flex flex-col">
        <h2 className="text-2xl text-center border-b-2 border-black">
          Quests Completed
        </h2>
        <div className="flex flex-grow flex-col h-full overflow-auto">
          {questsCompletedDisplay()}
        </div>
      </div>
    );
  };

  const formButtons = () => {
    return (
      <div className="w-full h-[25px] items-end gap-4 flex flex-row -bottom-[25px] absolute border-black border-b-2 pb-1 ">
        <button
          className="border border-black px-2 py-1 hover:backdrop-opacity-90 hover:bg-gray-300 rounded-md"
          type=""
          onClick={handleSelect}
        >
          Select All
        </button>
        <button
          className="border border-black px-2 py-1 hover:backdrop-opacity-90 hover:bg-gray-300 rounded-md"
          type=""
          onClick={handleDeselect}
        >
          Deselect All
        </button>
        <button
          className="border border-black px-2 py-1 hover:bg-gray-300 rounded-md"
          type="submit"
        >
          Submit
        </button>
        {questsCompleted.length > 0 && (
          <button
            className="border border-black px-2 py-1 hover:bg-gray-300 rounded-md"
            type="reset"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
    );
  };

  const handleDeselect = (e) => {
    e.preventDefault();
    setQuestsToAdd([]);
    setQPToGain(0);
    setXPToAdd(baseState);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    const questsAvailable = Object.keys(questList).filter((quest) => {
      return !questsCompleted.includes(quest) && !questsToAdd.includes(quest);
    });
    const newQuests = [...questsToAdd, ...questsAvailable];
    const qpToAdd = newQuests.reduce((acc, quest) => {
      return acc + questList[quest].questPoints;
    }, 0);
    setQuestsToAdd(newQuests);
    questsAvailable.forEach((quest) => {
      addXpToGain(quest);
    });
    setQPToGain(qpToAdd);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setQuestsToAdd([]);
    setQPToGain(0);
    setXPToAdd(baseState);
    const newObject = {
      completedQuests: [],
      totalXP: 0,
      totalQuestPoints: 0,
    };
    Object.entries(SKILLS).forEach(([skill, xp]) => {
      newObject[skill.toLowerCase()] = 0;
    });
    try {
      const res = await fetch("http://localhost:8080/api/updateuserinfo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObject),
        credentials: "include",
      }).then((res) => fetchAndSetUser());
    } catch (err) {}
  };

  const fetchAndSetUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/userinfo", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setQuesterData(data);
      setUsername(data.email);
      setTotalXP(data.totalXP);
      setTotalQuestPoints(data.totalQuestPoints);
      setQuestsCompleted(data.completedQuests);
      setSkillXP({
        Agility: data.agility, // 1
        Attack: data.attack, // 2
        Construction: data.construction, // 3
        Cooking: data.cooking, // 4
        Crafting: data.crafting, // 5
        Defence: data.defence, // 6
        Farming: data.farming, // 7
        Fletching: data.fletching, // 8
        Firemaking: data.firemaking, // 9
        Fishing: data.fishing, // 10
        Herblore: data.herblore, // 11
        Hitpoints: data.hitpoints, // 12
        Hunter: data.hunter, // 13
        Magic: data.magic, // 14
        Mining: data.mining, // 15
        Prayer: data.prayer, // 16
        Ranged: data.ranged, // 17
        Runecraft: data.runecraft, // 18
        Slayer: data.slayer, // 19
        Smithing: data.smithing, // 20
        Strength: data.strength, // 21
        Thieving: data.thieving, // 22
        Woodcutting: data.woodcutting, // 23
      });
    } catch (err) {}
  };

  return (
    <div className=" min-h-[80vh] text-sm h-[94vh] max-h-[100vh] border-red-900 flex flex-row w-[100%] px-2 mx-auto flex-grow bg-gradient-to-r from-yellow-100 to-gray-500 overflow-hidden">
      <div
        id="leftSide"
        className=" h-full max-h-[90vh] w-[70%] min-h-[80vh] border-green-500 relative flex-row flex pb-8"
      >
        <div className="h-full w-1/3">
          <div className="h-full border-r border-black w-full min-w-full">
            <h2 className="text-2xl text-center border-b-2 border-black w-full">
              Quests Availabe
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full h-[97%]"
            >
              <div className="flex flex-row h-full overflow-hidden border-red-900 w-full">
                <div className="h-full overflow-auto w-full min-w-full">
                  {questListDisplay()}
                </div>
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
        className=" h-full w-[30%] min-h-[80vh] border-black border-l"
      >
        <div className="flex flex-col w-full h-full">
          <h2 className="text-2xl w-full justify-center items-center text-center border-b-2 border-black">
            {" "}
            QUESTER STATS
          </h2>
          <div className="flex px-2 gap-1">
            Username:
            <p className={``}>{username}</p>
          </div>
          <div className="flex px-2 gap-1">
            Number of Quests Completed:
            <p className={`${added ? "text-blue-300" : ""}`}>
              {questsCompleted.length}
            </p>
          </div>
          <div className="flex px-2 gap-1">
            Total XP Rewarded:
            <p className={`${added ? "text-blue-300" : ""}`}>
              {Math.trunc(totalXP).toLocaleString()}
            </p>
          </div>
          <div className="flex px-2 gap-1">
            Quest Points Rewarded:
            <p className={`${added ? "text-blue-300" : ""}`}>
              {totalQuestPoints}
            </p>
          </div>
          <div className="px-2">XP Distribution:</div>
          <div className="h-4/5 flex flex-col justify-evenly overflow-auto border rounded-xl border-black w-3/4 mx-auto bg-gray-400 text-yellow-200">
            {questXpDisplay()}
          </div>
          {/* <p>Quests Remaining:</p> */}
          {/* <p>Items Rewarded:</p> */}
        </div>
      </div>
    </div>
  );
}
