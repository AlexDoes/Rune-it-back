import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Webscraper from "./pages/webscraper";
import AQD from "./pages/allquestdata";
import Quester from "./pages/quester";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.text())
      .then((message) => {
        setMessage(message);
      });
  }, []);

  return (
    <div className="w-full h-[100vh] scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webscraper" element={<Webscraper />} />
          <Route path="/aqd" element={<AQD />} />
          <Route path="*" element={<Home />} />
          <Route path="/quester" element={<Quester />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
