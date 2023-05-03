import React from "react";

const imageUrls = [
  "https://i0.wp.com/keithratner.live/wp-content/uploads/2019/04/moeba_livingroom_mockup.png",
  "https://i0.wp.com/keithratner.live/wp-content/uploads/2019/04/disc-home-wall.png",
  "https://i0.wp.com/keithratner.live/wp-content/uploads/2019/04/awl-wall-mockup.png",
  "https://i0.wp.com/keithratner.live/wp-content/uploads/2019/05/hummingbird-wall-mockup.png",
];

const Images = () => {
  //   const images = imageUrls;
  const altText = imageUrls.map((url) => {
    const filename = url.split("/").pop();
    const alt = filename.split(".")[0];
    return alt;
  });

  return { imageUrls, altText };
};

export default Images;
