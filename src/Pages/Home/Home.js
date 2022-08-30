import React from "react";
import CardList from "../../component/CardList/CardList";
import Navbar from "../../component/Navbar/Navbar";
import "./Home.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import DropWrapper from "../../component/DropWrapper/DropWrapper";
import Card from "../../component/Card/Card";

const Home = () => {
  const CARD1 = [
    {
      id: 1,
      firstname: "Pranav",
      lastname: "Pandya",
      branch: 21,
      month: "July - 2022",
      icon: "⭕️",
      status: "Open",
    },
    {
      id: 2,
      firstname: "Ravi",
      lastname: "Rana",
      branch: 354,
      month: "July - 2022",
      icon: "⭕️",
      status: "Open",
    },
    {
      id: 3,
      firstname: "Keval",
      lastname: "Chavda",
      branch: 87,
      month: "August - 2022",
      icon: "⭕️",
      status: "Open",
    },
    {
      id: 4,
      firstname: "Jay",
      lastname: "Soni",
      branch: 96,
      month: "August - 2022",
      icon: "⭕️",
      status: "Open",
    },
    {
      id: 5,
      firstname: "Jaydeep",
      lastname: "Barad",
      branch: 75,
      month: "July - 2022",
      icon: "⭕️",
      status: "Open",
    },
    {
      id: 6,
      firstname: "Smit",
      lastname: "Panchal",
      branch: 43,
      month: "August - 2022",
      icon: "⭕️",
      status: "Open",
    },
    {
      id: 7,
      firstname: "Rohit",
      lastname: "Oza",
      branch: 71,
      month: "June - 2022",
      icon: "⭕️",
      status: "Open",
    },
  ];

  const [items, setItems] = useState(CARD1);

  const statuses = [
    {
      status: "Open",
      icon: "⭕️",
      color: "#EB5A46",
    },
    {
      status: "In Progress",
      icon: "🔆️",
      color: "#00C2E0",
    },
    {
      status: "In Review",
      icon: "📝",
      color: "#C377E0",
    },
    {
      status: "Done",
      icon: "✅",
      color: "#3981DE",
    },
  ];

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onDrop = (item, monitor, status) => {
    if (item.status !== status) { 
      const mapping = statuses.find((si) => si.status === status);
      setItems((prevState) => {
        const newItems = prevState
          .filter((i) => i?.id !== item?.id)
          .concat({ ...item, status, icon: mapping.icon });
        return [...newItems];
      });
    }
  };
  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

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
          className={` p-1 px-2 outline-none w-50 ${
            darkMode ? "rounded  bg-dark-nav-search border-0 text-white" : ""
          } `}
          placeholder="Search or filter result..."
        />
        <div>
          <button
            className={`p-1 px-2 border border-secondary br-3 me-3 ${
              darkMode ? "bg-secondary text-white" : ""
            } `}
          >
            Edit board
          </button>
          <button
            className={`p-1 px-2 border border-secondary br-3 ${
              darkMode ? "bg-dark-btn " : "bg-primary"
            }  text-light`}
          >
            Create list
          </button>
        </div>
      </div>
      <div
        className={`mt-2 p-2 ${
          darkMode ? "" : "border"
        } d-flex gap-15 justify-content-center`}
      >
        {statuses?.map((s) => {
          return (
            <div className={"col-wrapper"}>
              <DropWrapper onDrop={onDrop} status={s?.status}>
                <CardList title={s.status} icon={s.icon} setItems={setItems} items={items}>
                  {items
                    .filter((i) => i?.status === s?.status)
                    .map((i, idx) => (
                      <Card
                        key={i?.id}
                        item={i}
                        index={idx}
                        moveItem={moveItem}
                        status={s}
                      />
                    ))}
                </CardList>
              </DropWrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
