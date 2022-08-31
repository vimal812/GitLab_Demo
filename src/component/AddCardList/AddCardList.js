import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const AddCardList = ({
  SetAddList,
  setListTitle,
  listTitle,
  setColumns,
  columns,
}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [tmpArr, setTmpArr] = useState([columns]);

  const handleAddList = () => {
    const tmpObj = {
      title: listTitle,
      id: new Date().getTime().toString(),
      items: [],
    };

    setColumns({ ...columns, listTitle: tmpObj });
    SetAddList(false);
    setListTitle("");
  };
  console.log("tmpArr", tmpArr);
  return (
    <div
      className={` my-5 ${
        darkMode ? "bg-dark-common text-light" : "bg-light-gray"
      }  border rounded`}
    >
      <div className="p-3 px-5">
        <div>
          <h5 className="fs-6  mb-0">Add Title</h5>
          <input
            className="border rounded outline-none mt-2 py-1 ps-2"
            onChange={(e) => {
              setListTitle(e.target.value);
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type=""
            className={`mt-3 border rounded p-1 px-2 ${
              listTitle ? "bg-success text-white" : ""
            }`}
            disabled={listTitle ? false : true}
            onClick={(e) => {
              handleAddList(e);
            }}
          >
            Creat List
          </button>
          <button
            type=""
            className={`mt-3 border rounded p-1 px-2`}
            onClick={() => {
              SetAddList(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>

      <hr className="my-1" />
    </div>
  );
};

export default AddCardList;
