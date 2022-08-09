import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../DnDContainer/ItemTypes";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Card = (props) => {
  const { name, branch, id, findCard, moveCard, month } = props;

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const originalIndex = findCard(id).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      hover({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );
  const opacity = isDragging ? 0 : 1;
  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{ opacity }}
      className={`border m-1 rounded p-3 cursor-grab ${
        isDragging ? "card_animation" : ""
      }  ${darkMode ? "bg-dark-nav-search" : "bg-white"} `}
    >
      <h6>
        {name} - {month}{" "}
      </h6>
      <div className="d-flex justify-content-between">
        <p className=" mb-0 text-secondary f-12">#{branch}</p>
        <div className="rounded-circle bg-dark p-1 f-12 text-white">PP</div>
      </div>
    </div>
  );
};

export default Card;
