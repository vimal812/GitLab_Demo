import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import AddCard from "../AddCard/AddCard";

const CardList = (props) => {
  const { children, title, setItems, items, icon } = props;
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [addCard, setAddCard] = useState(false);

  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });

  const handleAddCard = () => {
    const tmpArr = [...items];
    tmpArr.push({
      id: items.length + 1,
      firstname: name.firstname,
      lastname: name.lastname,
      branch: Math.floor(Math.random() * 99) + 10,
      month: "August - 2022",
      status: title,
      icon: icon,
    });
    setAddCard(false);
    setItems(tmpArr);
    setName({
      firstname: "",
      lastname: "",
    });
  };
  

  return (
    <div
      className={` my-5 ${
        darkMode ? "bg-dark-common text-light" : "bg-light-gray"
      }  border rounded`}
    >
      <div className="d-flex justify-content-between align-items-center py-2">
        <h5 className="fs-6 ms-3 mb-0">
          <span className="f-12 fw-bolder me-3">
            <i class="fa-solid fa-angle-right"></i>
          </span>{" "}
          {title}
        </h5>
        <div className="me-3 d-flex align-items-center">
          <button className="text-secondary border-0 fs-5 me-2 bg-transparent">
            <i className="fa-solid fa-box-tissue"></i>
          </button>
          <p className="mb-0 me-2 text-secondary">{children.length}</p>
          <button
            className={`border ${
              darkMode ? "bg-secondary text-white" : "bg-white"
            }  text-secondary p-1 px-2 rounded`}
            onClick={() => {
              setAddCard(true);
            }}
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      <hr className="my-1" />

      <div className="wi-33">
        {addCard ? (
          <AddCard
            name={name}
            setName={setName}
            setAddCard={setAddCard}
            handleAddCard={handleAddCard}
          />
        ) : (
          ""
        )}
        {children}
      </div>
    </div>
  );
};

export default CardList;
