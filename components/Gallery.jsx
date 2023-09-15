"use client";

import { useState } from "react";
import { images } from "@/public/assets/gallery";
import Modal from "./Modal";

const Gallery = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (image, index) => {
    setCurrentIndex(index);
    setClickedImg(image.src);
  };

  const handleRotation = (direction) => {
    const totalLength = images.length;
    let newIndex;

    if (direction === "right") {
      newIndex = currentIndex + 1;
      if (newIndex >= totalLength) {
        newIndex = 0;
      }
    } else if (direction === "left") {
      newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = totalLength - 1;
      }
    }

    const newUrl = images[newIndex].src;
    setClickedImg(newUrl);
    setCurrentIndex(newIndex);
  };

  const handleRotationRight = () => {
    handleRotation("right");
  };

  const handleRotationLeft = () => {
    handleRotation("left");
  };

  return (
    <section
      className="layout h-full pt-[60px] md:pt-[130px] medium:mt-[30px]"
      id="gallery"
    >
      <div className="mx-5 flex-1 md:w-full">
        <h2 className="text-[30px] md:text-[39px] mb-[38px] font-playFair leading-tight font-bold ">
          Our Gallery
        </h2>
      </div>
      <div className="flex flex-col gap-[1rem] flex-wrap mx-5 cursor-pointer medium:max-w-[400px] tab:max-w-[500px] tab:mx-auto box-parent">
        <div className="flex gap-[1rem] flex-wrap tab:flex-col primary">
          {images?.slice(0, 3).map((image, index) => (
            <div className="flex-1 " key={index}>
              <img
                onClick={() => handleClick(image, index)}
                src={image.src}
                alt={image.src}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-[1rem] flex-wrap tab:flex-col secondary">
          {images?.slice(3).map((image, index) => (
            <div className="flex-1 " key={index}>
              <img
                className="h-[100%] object-cover"
                onClick={() => handleClick(image, index)}
                src={image.src}
                alt={image.src}
              />
            </div>
          ))}
        </div>
      </div>
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handleRotationRight={handleRotationRight}
          handleRotationLeft={handleRotationLeft}
          setClickedImg={setClickedImg}
        />
      )}
    </section>
  );
};

export default Gallery;
