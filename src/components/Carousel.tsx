import React, { useState } from "react";

interface Props {
  onNext: () => void;

  slides: string[];
}

function Carousel({ onNext, slides }: Props) {
  const [index, setIndex] = useState(0);
  const length = slides.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <>
      <div className="carousel slide">
        <div className="carousel-inner">
          {slides.map((slide) => (
            <div className={"carousel-item active"}>
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                key={slide}
                width="800"
                height="400"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
                <text x="50%" y="50%" fill="#555" dy=".3em">
                  {slides[index]}
                </text>
              </svg>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrevious}
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
