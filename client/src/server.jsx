import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Carousel from "./components/Carousel.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import CarouselImages from './components/RevisedCarousel.jsx';
import {
  faCoffee,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCoffee, faAngleLeft, faAngleRight);
class App extends React.Component {
//The props for the state are passed from the established props object in the server when S
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.pictures,
      clicked: this.props.clicked,
      clickedImage: this.props.clickedImage,
      listingID: this.props.listingID
    };
  }

  render() {
    if (this.state.clicked === false) {
      return (
        <main>
          <div className="wrapper">
            <CarouselImages images={this.state.pictures} handleClick={this.handleClick}/>
          </div>
        </main>
      );
    }
    if (this.state.clicked === true) {
      return (
        <Carousel
          clickedImage={this.state.clickedImage}
          pictures={this.state.pictures}
        />
      );
    }
  }
}

export default App;