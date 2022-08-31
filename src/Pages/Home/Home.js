import React from "react";
import CardList from "../../component/CardList/CardList";
import Navbar from "../../component/Navbar/Navbar";
import "./Home.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { columnsFromBackend } from "../../Constant/constant";
import { Draggable } from "react-beautiful-dnd";
import AddCard from "../../component/AddCard/AddCard";
import AddCardList from "../../component/AddCardList/AddCardList";

const Home = () => {
  const array = [];

  const [columns, setColumns] = useState(columnsFromBackend);
  const [addList, SetAddList] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const [search, setSearch] = useState("");

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;

    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      if (result.type === "sub") {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        });
      }
    } else {
      if (result.type === "app") {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems,
          },
        });
      } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems,
          },
        });
      }
    }
    // if(result)
  };

  const handleAddList = () => {
    // console.log("columns", columns);
  };

  return (
    <>
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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div>
            <button
              className={`p-1 px-2 border border-secondary br-3 ${
                darkMode ? "bg-dark-btn " : "bg-primary"
              }  text-light`}
              onClick={() => {
                SetAddList(true);
                handleAddList();
              }}
            >
              Create list
            </button>
          </div>
        </div>
        <div>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            <div>
              <Droppable droppableId="board" type="app" direction="horizontal">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`mt-2 p-2 ${
                      darkMode ? "" : "border"
                    } d-flex gap-15 justify-content-center`}
                  >
                    {Object.entries(columns).map(
                      ([columnId, column], index) => {
                        return (
                          <Draggable
                            key={columnId}
                            draggableId={columnId}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="cardcontainer-wrapper"
                                >
                                  <CardList
                                    column={column}
                                    columnId={columnId}
                                    search={search}
                                  />
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      }
                    )}

                    {/* {console.log("listTitle", listTitle)} */}
                    {addList && (
                      <AddCardList
                        columns={columns}
                        setListTitle={setListTitle}
                        setColumns={setColumns}
                        SetAddList={SetAddList}
                        listTitle={listTitle}
                      />
                    )}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </div>
      </div>
    </>
  );
};

export default Home;
