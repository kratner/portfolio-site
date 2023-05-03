import React, { Component } from "react";
import Images from "./Images";

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
      currentAltText: 0,
      previousImage: null,
      previousAltText: null,
      fadingOut: false,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { currentImage } = this.state;
      const { currentAltText } = this.state;
      const { imageUrls, altText } = Images();
      const nextImage = (currentImage + 1) % imageUrls.length;
      const nextAltText = (currentAltText + 1) % altText.length;
      this.setState({
        previousImage: currentImage,
        currentImage: nextImage,
        previousAltText: currentAltText,
        currentAltText: nextAltText,
        fadingOut: true,
      });
      setTimeout(() => {
        this.setState({ fadingOut: false });
      }, 1000);
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      currentImage,
      previousImage,
      currentAltText,
      previousAltText,
      fadingOut,
    } = this.state;
    const { imageUrls, altText } = Images();

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
            src={imageUrls[previousImage]}
            style={{
              position: "absolute",
              maxWidth: "100%",
              maxHeight: "100%",
              opacity: fadingOut ? 0 : 1,
              transition: "opacity 1s ease-out",
            }}
          />
        )}
        <img
          alt={altText[currentAltText]}
          src={imageUrls[currentImage]}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            opacity: fadingOut ? 1 : 0,
            transition: "opacity 1s ease-out",
          }}
        />
      </div>
    );
  }
}

export default Slideshow;
