import React, { useState, useEffect } from "react";

// COMPONENTS
import TestimonialAvatar from "./TestimonialAvatar";
import SliderBtn from "./SliderBtn";
import Testimonial from "./Testimonial";

const TestimonialsContainer = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);

  // FETCHING TESTIMONIAL DATA FROM API
  useEffect(() => {
    fetch("https://testimonialapi.toolcarton.com/api")
      .then((res) => res.json())

      .then((data) => {
        setTestimonialData(data);
      })
      .catch((err) => console.log(err));

    handleSliderIndex(sliderIndex);
    
  }, [sliderIndex]);

  // CHECKING IF SLIDER INDEX IS NEGATIVE OR GRATER THAN FETCHED ARRAY
  const handleSliderIndex = (index) => {
    if (index < 0) {
      setSliderIndex(testimonialData.length - 1);
    }
    if (index > testimonialData.length - 1) {
      setSliderIndex(0);
    }
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <h3>TESTIMONIALS</h3>
        <div className="container">
          <div className="testimonials-slider-container">
            {/* ----------------TESTIMONIAL DATA----------------- */}
            {testimonialData.length > 0 &&
              testimonialData.map((item) => {
                return (
                  <Testimonial
                    key={item.id}
                    data={item}
                    sliderIndex={sliderIndex}
                  />
                );
              })}
          </div>
          <div className="testimonials-image-btn-container" id="flex">
            <div className="testimonials-images-container">
              {/* ------------TESTIMONIAL IMAGES------ */}
              {testimonialData.length > 0 &&
                testimonialData.map((item, index) => (
                  <TestimonialAvatar
                    key={item.id}
                    data={item.avatar}
                    currentIndex={index}
                    sliderIndex={sliderIndex}
                    setSliderIndex={setSliderIndex}
                  />
                ))}
            </div>

            {/* -------------SLIDER BUTTON--------------- */}
            <SliderBtn
              sliderIndex={sliderIndex}
              setSliderIndex={setSliderIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsContainer;
