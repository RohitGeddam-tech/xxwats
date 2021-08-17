import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceSlider = ({ initialChecked, passChecked }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1.95,
    slidesToScroll: 2,
    speed: 500,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          dots: false,
          arrows: true,
          infinite: false,
          slidesToShow: 1.8,
          slidesToScroll: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 1270,
        settings: {
          dots: false,
          arrows: true,
          infinite: false,
          slidesToShow: 1.6,
          slidesToScroll: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          dots: false,
          arrows: true,
          infinite: false,
          slidesToShow: 1.3,
          slidesToScroll: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 950,
        settings: {
          dots: false,
          arrows: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 750,
        settings: {
          dots: false,
          arrows: true,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 500,
        },
      },
      {
        breakpoint: 550,
        settings: {
          dots: false,
          arrows: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
        },
      },
    ],
  };

  let checkedboxes = {
    creative: { checked: false, value: "Creative Strategy" },
    brand: { checked: false, value: "Branding Campaign" },
    social: { checked: false, value: "Social Media Campaign" },
    video: { checked: false, value: "Video Campaign" },
    ground: { checked: false, value: "On-ground Engagements" },
    post: { checked: false, value: "Post Production" },
    production: { checked: false, value: "Production" },
  };

  const [isChecked, setChecked] = useState(initialChecked);

  const removeItemOnce = (arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const handleClick = (e, each) => {
    const val = checkedboxes[each].value;
    e.target.checked ? initialChecked.push(val) : removeItemOnce(initialChecked, val);
    setChecked(initialChecked);
  };

  useEffect(() => {
    passChecked(isChecked);
  }, [isChecked, passChecked]);

  return (
    <div className="slideservice">
      <Slider {...settings}>
      {Object.keys(checkedboxes).map((each, index) => {
        return (
          <div className="insideslide" key={index}>
            <label
              htmlFor={each}
              className="serviceslider-btn"
              onClick={(e) => {
                e.target.classList.toggle("after");
              }}
            >
              {checkedboxes[each].value}
            </label>
            <input
              id={each}
              type="checkbox"
              data-name={each}
              onChange={(e) => {
                handleClick(e, each);
              }}
              style={{ display: "none" }}
            />
          </div>
        );
      })}
      </Slider>
    </div>
  );
}


export default ServiceSlider