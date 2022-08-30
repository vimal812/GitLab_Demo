import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../DnDContainer/ItemTypes";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Card = (props) => {
  const { item, index, moveItem } = props;

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { ...item, index },
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity: isDragging ? 0 : 1 }}
      className={`border m-1 rounded p-3 cursor-grab ${
        isDragging ? "card_animation" : ""
      }  ${darkMode ? "bg-dark-nav-search" : "bg-white"} `}
    >
      <h6>
        {item.firstname + " " + item.lastname} - {item.month}{" "}
      </h6>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <p className=" mb-0 text-secondary f-12 me-2">#{item.branch}</p>
          <p className=" mb-0 text-secondary f-12">{item.icon}</p>
        </div>
        <div className="rounded-circle bg-dark profile-circle text-white">
          {item.firstname[0] + item.lastname[0]}
        </div>
      </div>
    </div>
  );
};

export default Card;
