import React, { useRef, useState } from "react";
import { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Card = (props) => {
  const { items, item, index  } = props;

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
 
  
  return (
    <Draggable key={item} draggableId={item} index={index}>
      {(provided, snapshot) => {

        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`border m-1 rounded p-3 cursor-grab   ${
              darkMode ? "bg-dark-nav-search" : "bg-white"
            } `}
            key={index}
          >
            <h6>
              {items.firstname + " " + items.lastname} - {items.month}{" "}
            </h6>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p className=" mb-0 text-secondary f-12 me-2">
                  #{items.branch}
                </p>
                {/* <p className=" mb-0 text-secondary f-12">{items.icon}</p> */}
              </div>
              <div className="rounded-circle bg-dark profile-circle text-white">
                {items.firstname[0] + items.lastname[0]}
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;
