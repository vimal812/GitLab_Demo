import React from "react";
import Card from "../Card/Card";
import update from "immutability-helper";
import { memo, useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../DnDContainer/ItemTypes";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const CardList = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { ITEMS } = props;
  const [cards, setCards] = useState(ITEMS);
  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c) => `${c.id}` === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );
  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }));

  return (
    <div
      className={` ${
        darkMode ? "bg-dark-common text-light" : "bg-light-gray"
      }  wi-33 border rounded`}
    >
      <div className="d-flex justify-content-between align-items-center py-2">
        <h5 className="fs-6 ms-3">
          <span className="f-12 fw-bolder me-3">
            <i class="fa-solid fa-angle-right"></i>
          </span>{" "}
          Open
        </h5>
        <div className="me-3 d-flex align-items-center">
          <button className="text-secondary border-0 fs-5 me-2 bg-transparent">
            <i className="fa-solid fa-box-tissue"></i>
          </button>
          <p className="mb-0 me-2 text-secondary">7</p>
          <button
            className={`border ${
              darkMode ? "bg-secondary text-white" : "bg-white"
            }  text-secondary p-1 px-2 rounded`}
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <hr className="my-1" />
      <div className="h-500 overflow-auto" ref={drop}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={`${card.id}`}
            name={card.name}
            month={card.month}
            branch={card.branch}
            moveCard={moveCard}
            findCard={findCard}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
