import React from "react";

// ASSETS ( ARROW ICONS )
import NextArrowIcon from "../../res/icons/arrow-next.svg";
import PrevArrowIcon from "../../res/icons/arrow-prev.svg";

const SliderBtn = ({ sliderIndex, setSliderIndex }) => {
  return (
    <div className="slider-btn">
      <button
        className="prev-btn"
        onClick={(e) => {
          setSliderIndex(sliderIndex - 1);
        }}
      >
        <img src={PrevArrowIcon} alt="previous" />
      </button>

      <button
        className="next-btn"
        onClick={(e) => {
          setSliderIndex(sliderIndex + 1);
        }}
      >
        <img src={NextArrowIcon} alt="next" />
      </button>
    </div>
  );
};

export default SliderBtn;
