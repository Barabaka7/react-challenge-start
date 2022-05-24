import React from "react";

export const Tile = (props) => {

  const { item } = props;
  const valuesTile = Object.values(item);

  return (
    <div className="tile-container">
     { valuesTile.map( (i,j) => 
     {
       if (j === 0)
       { return <p className="tile-title" key={j}>{i}</p>}
       else { return <p className="tile" key={j}>{i}</p> }
     } )}
    </div>
  );
};
