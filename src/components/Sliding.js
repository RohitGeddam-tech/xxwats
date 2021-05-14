import React, { Component } from "react";
import Slider from "react-slick";
import ebay from "../img/clients/ebay.png";
import dbs from "../img/clients/dbs-bank.png";
import donuts from "../img/clients/dunkin-donuts.png";
import edel from "../img/clients/edelweiss.png";
import excel from "../img/clients/excel-entertainment.png";
import fan from "../img/clients/fankind.png";
import history from "../img/clients/history.png";
import mic from "../img/clients/microsoft.png";
import nush from "../img/clients/nush.png";
import prime from "../img/clients/prime-video.png";
import raymond from "../img/clients/raymond.png";
import star from "../img/clients/star-world.png";
import viu from "../img/clients/viu.png";
import vivo from "../img/clients/vivo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 0,
      pauseOnHover:false,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 4,
            pauseOnHover:false,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3500,
            autoplaySpeed: 0,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 550,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 3,
            infinite: true,
            slidesToScroll: 1,
            pauseOnHover:false,
            autoplay: true,
            speed: 3500,
            autoplaySpeed: 0,
            cssEase: "linear",
            initialSlide: 2,
          },
        },
        {
          breakpoint: 450,
          settings: {
            dots: false,
            infinite: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            pauseOnHover:false,
            autoplay: true,
            speed: 3500,
            autoplaySpeed: 0,
            cssEase: "linear",
          },
        },
      ],
    };
    return (
      <div className="slide">
        <Slider {...settings}>
          <div className="sliderin">
            <img
              className="sliderimg"
              loading='lazy'
              alt="slider"
              src={dbs}
            />
          </div>
          <div className="sliderin">
            <img
              className="sliderimg"
              loading='lazy'
              alt="slider"
              src={donuts}
            />
          </div>
          <div className="sliderin">
            <img
              className="sliderimg"
              loading='lazy'
              alt="slider"
              src={ebay}
            />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={edel} />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={excel} />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={fan} />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={history} />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={mic} />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={nush} />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={prime} />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={raymond} />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={star} />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={viu} />
          </div>
          <div className="sliderin">
            <img className="sliderimg" loading='lazy' alt="slider" src={vivo} />
          </div>
        </Slider>
      </div>
    );
  }
}
