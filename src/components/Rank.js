import React, { Component } from 'react';


class Rank extends Component {
  render() {
    return (
      <div style={{fontFamily: "courier new, cursive"}} >
        <div className="white f3">
            {'Lucky, your current rank is...'}
        </div>
        <div className="white f2">
            {'#5'}
        </div>
      </div>
    );
  }
}

export default Rank;
