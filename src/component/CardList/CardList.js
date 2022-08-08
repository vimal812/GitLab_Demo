import React from "react";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className="bg-light-gray wi-33 border rounded">
      <div className="d-flex justify-content-between align-items-center py-2">
        <h5 className="fs-6 ms-3"><span className="f-12 fw-bolder me-3" ><i class="fa-solid fa-angle-right"></i></span> Open</h5>
        <div className="me-3 d-flex align-items-center">
          <button className="text-secondary border-0 fs-5 me-2">
            <i className="fa-solid fa-box-tissue"></i>
          </button>
          <p className="mb-0 me-2 text-secondary">7</p>
          <button className=" border bg-white text-secondary p-1 px-2 rounded">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <hr className="my-1" />
      <div className="h-500 overflow-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
