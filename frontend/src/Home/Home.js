import "./Home.scss";
import React from "react";
import JumboTronComponent from "../Jumbotron/JumbotronComponent";
import Thread from "../Thread/Thread";

const Home = () => {
  const ListNames = () => {
    const names = ["Thread 1", "Thread 2", "Thread 3", "Thread 4"];
    const listNames = names.map((name) => {
      return (
        <li key={name}>
          <Thread title={name} body={name} />
        </li>
      );
    });

    return <ul>{listNames}</ul>;
  };
  return (
    <div>
      <div style={{ textAlign: "center", width: "100%" }}>
        <JumboTronComponent />
        <div style={{ display: "inline-block" }}>
          <ListNames></ListNames>
        </div>
      </div>
    </div>
  );
};

export default Home;
