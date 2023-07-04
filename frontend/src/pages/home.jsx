import React, { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

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
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserInfo();
  }, []);
  console.log(user);
  return (
    <div className="">
      <h1>Home</h1>
      <p>Home page</p>
      <a href="/webscraper">Webscraper</a>
      <br />
      <a href="/aqd">All Quest Data</a>
    </div>
  );
}
