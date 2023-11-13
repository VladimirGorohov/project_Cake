import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";

import "./styles.css";
import { useState } from "react";

function Slide(props) {
  const { images } = props;

  console.log("randerSlider");

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow__next" onClick={onClick}>
        <FaArrowCircleRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow__prev" onClick={onClick}>
        <FaArrowCircleLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Slider__img">
      <h1 className="slaider_header">Категории Тортиков</h1>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activSlide" : "slide"}
          >
            <div className="img__text">
              <p>В категрию</p> {<FaArrowRightLong />}{" "}
            </div>
            <img className="slide__img" src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
