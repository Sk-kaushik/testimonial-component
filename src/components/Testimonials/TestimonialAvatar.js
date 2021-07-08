import React, { useEffect } from "react";

const TestimonialAvatar = ({
  data,
  currentIndex,
  sliderIndex,
  setSliderIndex,
}) => {
  useEffect(() => {
    changeAvatarRing(sliderIndex);
  });

  // FUNCTION FOR HANDLING CLICKS ON AVATAR (IMAGE)
  const handleAvatarClick = (e) => {
    changeAvatarRing(setSliderIndex(currentIndex));
  };

  // FUNCTION TO CHANGE AVATAR RING
  const changeAvatarRing = (imageIndex) => {
    var allSpan = document.querySelectorAll(".testimonials-image span");

    // REMOVING IMAGE RING SHOW CLASS FROM ALL IMAGES
    allSpan.forEach((item) => {
      item.classList.remove("image-ring-show");
    });

    // SHOW AVATAR IF SLIDER INDEX IS NOT NEGATIVE OR NOT GREATER THAN THE LENGTH OF FETCHED ARRAY
    if (sliderIndex >= 0 && sliderIndex <= allSpan.length - 1) {
      allSpan[sliderIndex].classList.add("image-ring-show");
    }
  };

  return (
    <div className="testimonials-image" onClick={handleAvatarClick}>
      <img src={data} alt="" />
      <span className="image-ring"></span>
    </div>
  );
};

export default TestimonialAvatar;
