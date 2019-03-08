import React from 'react';

const SmurfList = ({smurfs}) => {
  const mapSmurfs = smurfs.map(smurf => {
    return (
      <h5 key={smurf.name}>
      {smurf.name}, {smurf.age} years old, {smurf.height} tall!
      </h5>
    )
  });
  return (
    <ul>
      {mapSmurfs}
    </ul>
  );
}

export default SmurfList;