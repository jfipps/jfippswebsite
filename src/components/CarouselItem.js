import React from "react";

export default function CarouselItem({ image, width }) {
  return (
    <div className="CarouselItem" style={{ width: width }}>
      <div></div>
      <img src={image} alt="" className="CarouselImg" />
    </div>
  );
}
