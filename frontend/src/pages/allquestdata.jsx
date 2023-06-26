import React from "react";
import { useEffect } from "react";
import QuestTable from "../components/DataTable";
import axios from "axios";
import ReactLoading from "react-loading";

export default function AQD() {
  const [quests, setQuests] = React.useState({});
  const [flag, setFlag] = React.useState(false);
  React.useEffect(() => {
    const getQuests = async () => {
      const response = await fetch("/data/AQD.json");
      const data = await response.json();
      setQuests(data);
    };
    getQuests();
  }, []);
  const handleSort = (sortedData) => {
    setQuests(sortedData);
  };

  // wait 3 seconds before flipping flag
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(true);
    }, 2000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!flag) {
    // return <div> Loading... </div>;
    return (
      <div className="w-[90vw] h-[75vh] flex items-center justify-center flex-col overflow-hidden">
        <p className="text-4xl">Loading all quest data...</p>
        <ReactLoading
          type={"balls"}
          color={"Orange"}
          height={500}
          width={500}
        />
      </div>
    );
  }

  if (quests.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="">
      <h1 className="text-2xl pb-4">All Quest Data</h1>
      <QuestTable quests={quests} onSort={handleSort} />
      {/* {quests.length > 0 && <QuestTable questsData={quests} />} */}
    </div>
  );
}
