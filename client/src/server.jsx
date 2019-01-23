import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Carousel from "./components/Carousel.jsx";
import axios from "axios";
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
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.pictures,
      clicked: false,
      clickedImage: "",
      listingID: this.props.listingID
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let image = e.target.id;
    this.setState({
      clicked: true,
      clickedImage: image
    });
  }

  onMouseEnter(hoveredImage) {
    // console.log("onHover has run on >>>>>>>", clickedImage);

    if (hoveredImage === "a") {
      $(`.${hoveredImage}`).hover(
        () => {
          // on over
          $(`.b, .c, .d, .e`).animate({
            // opacity: 0.25,
            transition: 0.3
          });
        },
        () => {
          // on out
          $(`.b, .c, .d, .e`).animate({
            opacity: 1,
            transition: 0.3
          });
        }
      );
    }

    if (hoveredImage === "b") {
      $(`.${hoveredImage}`).hover(
        () => {
          // on over
          $(`.a, .c, .d, .e`).animate({
            opatcity: 0.25,
            transition: 0.3
          });
        },
        () => {
          // on out
          $(`.a, .c, .d, .e`).animate({
            opacity: 1
          });
        }
      );
    }

    if (hoveredImage === "c") {
      $(`.${hoveredImage}`).hover(
        () => {
          // on over
          $(`.a, .b, .d, .e`).animate({
            opacity: 0.25,
            transition: 0.3
          });
        },
        () => {
          // on out
          $(`.a, .b, .d, .e`).animate({
            opacity: 1
          });
        }
      );
    }

    if (hoveredImage === "d") {
      $(`.${hoveredImage}`).hover(
        () => {
          // on over
          $(`.a, .b, .c, .e`).animate({
            opacity: 0.25,
            transition: 0.3
          });
        },
        () => {
          // on out
          $(`.a, .b, .c, .e`).animate({
            opacity: 1
          });
        }
      );
    }

    if (hoveredImage === "e") {
      $(`.${hoveredImage}`).hover(
        () => {
          // on over
          $(`.a, .b, .c, .d`).animate({
            opacity: 0.25
          });
        },
        () => {
          // on out
          $(`.a, .b, .c, .d`).animate({
            opacity: 1
          });
        }
      );
    }
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
    // if (this.props.clicked === false) {
    //     return (
    //       <main>
    //         <div className="wrapper2">
    //           <CarouselImages images={this.props.pictures} handleClick={this.handleClick}/>
    //         </div>
    //       </main>
    //     );
    //   }
  
    //   if (this.props.clicked === true) {
    //     return (
    //       <Carousel
    //         clickedImage={this.props.clickedImage}
    //         pictures={this.props.pictures}
    //       />
    //     );
    //   }
  }
}

// ReactDOM.render(<App />, document.getElementById("image-carousel"));

export default App;