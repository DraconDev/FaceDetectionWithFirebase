import React from "react";

const Rank = ({ name, entries }) => {
  const count =
    entries > 0 ? (
      <div className="">
        <div className="white f3">{`${name}, your current entry count`}</div>
        <div className="white f1">{entries}</div>
      </div>
    ) : (
      ""
    );
  return count;
};

export default Rank;
