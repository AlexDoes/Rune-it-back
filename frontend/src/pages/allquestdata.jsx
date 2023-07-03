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
      <div className="w-[full] h-[100vh] flex items-center justify-center flex-col overflow-hidden m-auto bg-slate-500">
        <p className="text-6xl text-yellow-200">Loading all quest data...</p>
        <ReactLoading
          type={"balls"}
          color={"Lightgreen"}
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
    <div className="w-full mx-auto b-slate-500 px-10 bg-gradient-to-br from-slate-500 to-amber-100">
      <h1 className="text-2xl text-white w-full text-center py-4">
        All Quest Data
      </h1>
      <QuestTable quests={quests} onSort={handleSort} />
      {/* {quests.length > 0 && <QuestTable questsData={quests} />} */}
    </div>
  );
}
