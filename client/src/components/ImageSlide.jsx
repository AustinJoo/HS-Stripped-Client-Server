import React from "react";
import Arrow from "./Arrow.jsx";

export default class ImageSlide extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div className="image-slide">
        <Arrow
          direction="left"
          clickFunction={() => this.props.previousSlide()}
          glyph="&#9664;"
        />
        <img className="current-pic" src={`https://s3.us-east-2.amazonaws.com/hjs-images/${this.props.url}`}/>
        <Arrow
          direction="right"
          clickFunction={() => this.props.nextSlide()}
          glyph="&#9654;"
        />  
      </div>
    );
  }
};
