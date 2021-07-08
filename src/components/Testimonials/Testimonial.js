import React, { useEffect, useState } from "react";

const Testimonial = ({ data, sliderIndex }) => {
  const [testimonialData, setTestimonialData] = useState();

  useEffect(() => {
    setTestimonialData(data);
    showTestimonial();
  }, [sliderIndex]);

  const showTestimonial = () => {
    // GETTING ELEMENTS
    var testimonialArray = document.querySelectorAll(".testimonial");
    var testimonialContainer = document.querySelector(
      ".testimonials-slider-container"
    );

    // GETTING SIZE OF TESTIMONIAL CONTAINER
    var testimonialSize = testimonialArray[0].clientWidth;

    // SETTING LEFT/RIGHT SWIPING ANIMATION
    testimonialContainer.style.transform = `translateX(${
      -testimonialSize * sliderIndex
    }px)`;

    testimonialContainer.style.transition = "0.5s";
  };

  return (
    <div className="testimonial">
      {testimonialData != null && (
        <>
          <h1>{testimonialData.message}</h1>
          <p className="testimonial-lorem">{testimonialData.lorem}</p>

          <div className="testimonials-footer">
            <h6>
              {testimonialData.name},
              <span> {testimonialData.designation}, </span>
              <span> {testimonialData.location}</span>
            </h6>
            <p>Read Full Story</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonial;
