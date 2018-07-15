import React, { Component } from 'react';


const Rank = ({name, entries}) => {
  return (
    <div style={{fontFamily: "courier new, cursive"}} >
      <div className="white f3">
         <h1> {`${name} Your current rank is....`} </h1>
      </div>
      <div className="white f2">
          {`${entries}`}
      </div>
    </div>
  );
}

export default Rank;
