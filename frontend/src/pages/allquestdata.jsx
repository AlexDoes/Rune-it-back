import React from "react";
import QuestTable from "../components/DataTable";
import axios from "axios";

export default function AQD() {
  const [quests, setQuests] = React.useState({});
  React.useEffect(() => {
    const getQuests = async () => {
      const response = await fetch("/data/AQD.json");
      const data = await response.json();
      setQuests(data);
    };
    getQuests();
  }, []);
  if (quests.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>All Quest Data</h1>
      <QuestTable quests={quests} />
    </>
  );
}
