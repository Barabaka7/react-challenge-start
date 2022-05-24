import React from "react";
import { Tile } from "../tile/Tile.js"

export const TileList = (props) => {

  const { arrayToList } = props; 

  //console.log(contacts);
  const listItems = arrayToList.map( (obj, i) => <Tile key={i} item={obj} /> );

  //console.log(listItems);

  return (
    <div>
      {listItems}
    </div>
  );
};
