import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
  color: "white",
};
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <IoIosArrowBack size={24} />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <IoIosArrowForward size={24} />
    </button>
  ),
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "600px",
  borderRadius: "15px",
  
};
const slideImages = [
  {
    url: "https://i.pinimg.com/1200x/cb/71/41/cb7141083471301d19c4d24f09a7d42c.jpg",
  },
  {
    url: "https://i.pinimg.com/1200x/19/f3/65/19f36531d85250587a9253582a375ed3.jpg",
  },
  {
    url: "https://i.pinimg.com/1200x/e0/f4/d9/e0f4d914204d2e3800b96e9c6a20c8bd.jpg",
  },
  {
    url: "https://i.pinimg.com/1200x/ad/13/e0/ad13e088c5cd637ae4306802dce2a1d7.jpg",
  },
  
];

function Slider() {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 pt-12">
        <Slide {...properties} transitionDuration={500}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Slider;
