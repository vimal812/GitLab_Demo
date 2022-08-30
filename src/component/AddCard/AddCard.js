import React from "react";

const AddCard = ({ name, setName, setAddCard, handleAddCard }) => {
  return (
    <div className="border m-1 rounded p-3 cursor-grab ">
      <div className="d-flex">
        <div>
          <h6 className="f-15 mb-2"> First name</h6>
          <input
            className="rounded border w-160 p-1 me-2 ps-1 f-15 outline-none"
            value={name.firstname}
            onChange={(e) => {
              setName((prev) => ({
                ...prev,
                firstname: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <h6 className="f-15 mb-2">Last name</h6>
          <input
            value={name.lastname}
            className="rounded border w-160 outline-none ps-1 p-1 f-15"
            onChange={(e) => {
              setName((prev) => ({
                ...prev,
                lastname: e.target.value,
              }));
            }}
          />
        </div>
      </div>
      <div className="mt-3 d-flex flex-row justify-content-between">
        <button
          className={`border f-15 py-2 px-3 rounded ${
            name.firstname.length > 0
              ? "bg-success text-white"
              : "text-secondary"
          } `}
          onClick={handleAddCard}
          disabled={name.firstname.length > 0 ? false : true}
        >
          Create card
        </button>
        <button
          onClick={() => {
            setAddCard(false);
          }}
          className="border f-15 py-2 px-3 rounded  text-secondary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddCard;
