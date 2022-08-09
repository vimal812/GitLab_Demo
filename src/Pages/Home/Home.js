import React from "react";
import CardList from "../../component/CardList/CardList";
import Navbar from "../../component/Navbar/Navbar";
import "./Home.css";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Home = () => {
  const CARD1 = [
    {
      id: 1,
      name: "Pranav Pandya",
      branch: 21,
      month: "July - 2022",
    },
    {
      id: 2,
      name: "Ravi Rana",
      branch: 354,
      month: "July - 2022",
    },
    {
      id: 3,
      name: "Keval Chavda",
      branch: 87,
      month: "August - 2022",
    },
    {
      id: 4,
      name: "Jay Soni",
      branch: 96,
      month: "August - 2022",
    },
    {
      id: 5,
      name: "Jaydeep Barad",
      branch: 75,
      month: "July - 2022",
    },
    {
      id: 6,
      name: "Smit Panchal",
      branch: 43,
      month: "August - 2022",
    },
    {
      id: 7,
      name: "Rohit Oza",
      branch: 71,
      month: "June - 2022",
    },
  ];

  const CARD2 = [
    {
      id: 8,
      name: "Pranav Pandya",
      branch: 21,
      month: "July - 2022",
    },
    {
      id: 9,
      name: "Ravi Rana",
      branch: 354,
      month: "July - 2022",
    },
    {
      id: 10,
      name: "Keval Chavda",
      branch: 87,
      month: "August - 2022",
    },
    {
      id: 11,
      name: "Jay Soni",
      branch: 96,
      month: "August - 2022",
    },
    {
      id: 12,
      name: "Jaydeep Barad",
      branch: 75,
      month: "July - 2022",
    },
    {
      id: 13,
      name: "Smit Panchal",
      branch: 43,
      month: "August - 2022",
    },
    {
      id: 14,
      name: "Rohit Oza",
      branch: 71,
      month: "June - 2022",
    },
  ];
  const CARD3 = [
    {
      id: 15,
      name: "Pranav Pandya",
      branch: 21,
      month: "July - 2022",
    },
    {
      id: 16,
      name: "Ravi Rana",
      branch: 354,
      month: "July - 2022",
    },
    {
      id: 17,
      name: "Keval Chavda",
      branch: 87,
      month: "August - 2022",
    },
    {
      id: 18,
      name: "Jay Soni",
      branch: 96,
      month: "August - 2022",
    },
    {
      id: 19,
      name: "Jaydeep Barad",
      branch: 75,
      month: "July - 2022",
    },
    {
      id: 20,
      name: "Smit Panchal",
      branch: 43,
      month: "August - 2022",
    },
    {
      id: 21,
      name: "Rohit Oza",
      branch: 71,
      month: "June - 2022",
    },
  ];

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`${darkMode ? "bg-dark-nav-search" : ""}`}>
      <Navbar />
      <div
        className={`${
          darkMode ? "bg-dark-common" : "bg-light-gray"
        } bg-light-gray py-2 mt-2 text-align-center d-flex justify-content-around`}
      >
        <input
          type="text"
          className={` p-1 px-2 outline-none w-50 ${darkMode ? "rounded  bg-dark-nav-search border-0 text-white" :""} `}
          placeholder="Search or filter result..."
        />
        <div>
          <button className={`p-1 px-2 border border-secondary br-3 me-3 ${darkMode ? "bg-secondary text-white" :""} `}>
            Edit board
          </button>
          <button className={`p-1 px-2 border border-secondary br-3 ${darkMode ? "bg-dark-btn " : "bg-primary"}  text-light`}>
            Create list
          </button>
        </div>
      </div>
      <div
        className={`mt-2 p-2 ${
          darkMode ? "" : "border"
        } d-flex gap-15 justify-content-center`}
      >
        <CardList ITEMS={CARD1} />
        <CardList ITEMS={CARD2} />
        <CardList ITEMS={CARD3} />
      </div>
    </div>
  );
};

export default Home;
