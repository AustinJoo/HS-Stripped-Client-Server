import React from "react";
import ImageSlide from "./ImageSlide.jsx";
import ImageList from "./ImageList.jsx";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      imgUrls: [
        "https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large",
        "https://a0.muscache.com/im/pictures/8a542c1f-b897-4127-8426-6c8e1a4903b7.jpg?aki_policy=x_large",
        "https://a0.muscache.com/im/pictures/47985619/11203a2d_original.jpg?aki_policy=x_large",
        "https://a0.muscache.com/im/pictures/27985267/512999cf_original.jpg?aki_policy=x_large",
        "https://a0.muscache.com/im/pictures/89281220/ed6e8824_original.jpg?aki_policy=x_large"
      ],
      imgCaptions: [
        "Sample Caption 1",
        "Sample Caption 2",
        "Sample Caption 3",
        "Sample Caption 4",
        "Sample Caption 5"
      ],
      showPhotoList: false
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.togglePhotoList = this.togglePhotoList.bind(this);
    this.updateCurrentImage = this.updateCurrentImage.bind(this);
  }

  componentDidMount(props) {
    // console.log("Im the clicked image >>>>>>>>", this.props.clickedImage);
    this.setState({
      currentImageIndex: this.props.clickedImage,
      imgUrls: this.props.pictures
    });
  }

  updateCurrentImage(newCurrentImageIndex) {
    console.log("Whats the new current index? >>>>>>>", newCurrentImageIndex);
    this.setState({
      currentImageIndex: newCurrentImageIndex
    });
  }

  previousSlide() {
    // console.log("I clicked the left button>>>>>>>>>");
    const lastIndex = this.state.imgUrls.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : Number(currentImageIndex) - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    // console.log("I clicked the right button>>>>>>>>");
    const lastIndex = this.state.imgUrls.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : Number(currentImageIndex) + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  togglePhotoList() {
    this.setState({
      showPhotoList: !this.state.showPhotoList
    });
  }

  render() {
    return (
      <div className="carousel">
        
        <div className="rectangle">
        <ImageSlide
          previousSlide={this.previousSlide}
          nextSlide={this.nextSlide}
          url={this.state.imgUrls[this.state.currentImageIndex]}
        />

        <div className="bottom-part">
          <div className="bar">
            <div className="caption">
              {this.state.imgCaptions[this.state.currentImageIndex]}
            </div>
            <div className="div-button">
              <button onClick={this.togglePhotoList} className="show-button">
                {this.state.showPhotoList
                  ? "Hide photo list"
                  : "Show photo list"}
              </button>
            </div>
          </div>
          <div className="footer"></div>

          </div>

          {this.state.showPhotoList ? (
            <ImageList
              updateCurrentImage={this.updateCurrentImage}
              imgUrls={this.state.imgUrls}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
