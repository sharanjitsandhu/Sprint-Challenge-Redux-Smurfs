import React from "react";

const SmurfList = ({ smurfs }) => {
  const mapSmurfs = smurfs.map(smurf => {
    return (
      <p key={smurf.name}>
        {smurf.name} is {smurf.age} years old and {smurf.height} cm tall!
      </p>
    );
  });
  return <ul>{mapSmurfs}</ul>;
};

export default SmurfList;
