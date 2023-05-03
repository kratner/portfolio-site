import React, { Component } from "react";

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
      currentAltText: 0,
      previousImage: null,
      previousAltText: null,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { currentImage } = this.state;
      const { currentAltText } = this.state;
      const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
      const nextImage = (currentImage + 1) % images.length;
      const nextAltText = (currentAltText + 1) % images.length;
      this.setState({
        previousImage: currentImage,
        currentImage: nextImage,
        previousAltText: currentAltText,
        currentAltText: nextAltText,
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentImage, previousImage, currentAltText, previousAltText } =
      this.state;
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    const altText = ["image 1", "image 2", "image 3"];

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        {previousImage !== null && (
          <img
            alt={altText[previousAltText]}
            src={images[previousImage]}
            style={{
              position: "absolute",
              maxWidth: "100%",
              maxHeight: "100%",
              opacity: 1,
              transition: "opacity 1s ease-out",
            }}
          />
        )}
        <img
          alt={altText[currentAltText]}
          src={images[currentImage]}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            opacity: previousImage !== null ? 0 : 1,
            transition: "opacity 1s ease-out",
          }}
        />
      </div>
    );
  }
}

export default Slideshow;
