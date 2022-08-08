import React from "react";

const Card = () => {
  return (
    <div className="border m-1 bg-white rounded p-3" >
      <h6>Pranav Pandya - August - 2022</h6>
      <div className="d-flex justify-content-between">
        <p className=" mb-0 text-secondary f-12">#47</p>
        <div className="rounded-circle bg-dark p-1 f-12 text-white">PP</div>
      </div>
    </div>
  );
};

export default Card;
