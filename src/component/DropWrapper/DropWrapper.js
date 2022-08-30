import React, { useEffect } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../DnDContainer/ItemTypes";
// import { statuses } from "../data";

const DropWrapper = ({
  onDrop,
  children,
  status,
  singalList,
  SetSingalList,
}) => {
  const statuses = [
    {
      status: "open",
      icon: "⭕️",
      color: "#EB5A46",
    },
    {
      status: "in progress",
      icon: "🔆️",
      color: "#00C2E0",
    },
    {
      status: "in review",
      icon: "📝",
      color: "#C377E0",
    },
    {
      status: "done",
      icon: "✅",
      color: "#3981DE",
    },
  ];

  // useEffect(() => {
  //   const tmpArr = [];
  //   tmpArr.push(children);
  //   SetSingalList((prev) => [...prev, tmpArr[0]]);
  // }, []);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: (item, monitor) => {
      const itemIndex = statuses.findIndex((si) => si.status === item.status);
      const statusIndex = statuses.findIndex((si) => si.status === status);
      return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  // console.log(singalList,"singalList")
  return (
    <div ref={drop} className={""}>
      {React.cloneElement(children, { isOver })}
    </div>
  );
};

export default DropWrapper;
