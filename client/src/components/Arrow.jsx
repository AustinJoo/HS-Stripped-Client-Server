import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Arrow = ({ direction, clickFunction, glyph }) => {
  if (direction === "left") {
    var icon = "angle-left";
  } else if (direction === "right") {
    var icon = "angle-right";
  }

  return (
    <div className={`arrow-${direction}`} onClick={clickFunction}>
      {/* {glyph} */}
      {/* <button className='button' onClick={clickFunction}></button> */}
      <FontAwesomeIcon icon={`${icon}`}/>
    </div>
  );
};

export default Arrow;