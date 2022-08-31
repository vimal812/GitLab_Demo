import React, { useState } from "react";
import { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import AddCard from "../AddCard/AddCard";
import Card from "../Card/Card";

const CardList = ({ column, columnId, search }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [addCard, setAddCard] = useState(false);

  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });

  const handleAddCard = () => {
    const mynewInputData = {
      id: new Date().getTime().toString(),
      firstname: name.firstname,
      lastname: name.lastname,
      branch: Math.floor(Math.random() * 99) + 10,
      month: "August - 2022",
    };

    column.items.push(mynewInputData);
    setAddCard(false);
    setName({
      firstname: "",
      lastname: "",
    });
  };
  return (
    <Droppable key={columnId} droppableId={columnId} type="sub">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={` my-5 ${
            darkMode ? "bg-dark-common text-light" : "bg-light-gray"
          }  border rounded`}
        >
          <div className="d-flex justify-content-between align-items-center py-2">
            <h5 className="fs-6 ms-3 mb-0">
              <span className="f-12 fw-bolder me-3">
                <i class="fa-solid fa-angle-right"></i>
              </span>{" "}
              {column.title}
            </h5>
            <div className="me-3 d-flex align-items-center">
              <button className="text-secondary border-0 fs-5 me-2 bg-transparent">
                <i className="fa-solid fa-box-tissue"></i>
              </button>
              <p className="mb-0 me-2 text-secondary">{column.items.length}</p>
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
            {column.items.map((item, index) => {
              if (search) {
                if (
                  (item.firstname + " " + item.lastname)
                    .toLowerCase()
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return <Card items={item} item={item.id} index={index} />;
                }
              } else {
                return <Card items={item} item={item.id} index={index} />;
              }
            })}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default CardList;
