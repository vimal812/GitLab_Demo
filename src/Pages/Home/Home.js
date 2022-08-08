import React from "react";
import CardList from "../../component/CardList/CardList";
import Navbar from "../../component/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-light-gray py-2 mt-2 text-align-center d-flex justify-content-around">
        <input
          type="text"
          className="p-1 px-2 outline-none w-50"
          placeholder="Search or filter result..."
        />
        <div>
          <button className="p-1 px-2 border border-secondary br-3 me-3">
            Edit board
          </button>
          <button className="p-1 px-2 border border-secondary br-3 bg-primary text-light">
            Create list
          </button>
        </div>
      </div>
      <div className="mt-2 p-2 border d-flex gap-15 justify-content-center">
        <CardList />
        <CardList />
        <CardList />
      </div>
    </div>
  );
};

export default Home;
