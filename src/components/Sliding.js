import React, { Component } from "react";
import Slider from "react-slick";
import ebay from '../img/clients/ebay.png'
import 'slick-carousel/slick/slick.css'; 
import "slick-carousel/slick/slick-theme.css";

// dots: false,
// arrows: false,
// infinite: true,
// slidesToShow: 3,
// slidesToScroll: 1,
// autoplay: true,
// speed: 3000,
// autoplaySpeed: 3000,
// cssEase: "linear"

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay:true,
      speed:3500,
      autoplaySpeed:3500,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 700,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay:true,
            speed:3500,
            autoplaySpeed:3500,
            cssEase: 'linear',
          }
        },
        {
          breakpoint: 550,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:true,
            speed:3500,
            autoplaySpeed:3500,
            cssEase: 'linear',
            initialSlide: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,
            speed:3500,
            autoplaySpeed:3500,
            cssEase: 'linear',
          }
        }
      ]
    };
    return (
      <div className='slide'>
        <Slider {...settings}>
          <div className='sliderin'>
            <img style={{paddingLeft:'20px'}} className='sliderimg' alt='slider' src={ebay} />
          </div>
          <div className='sliderin'>
            <img style={{paddingLeft:'20px'}} className='sliderimg' alt='slider' src={ebay} />
          </div>
          <div className='sliderin'>
            <img style={{paddingLeft:'10px'}} className='sliderimg' alt='slider' src={ebay} />
          </div>
          <div className='sliderin'>
            <img className='sliderimg' alt='slider' src={ebay} />
          </div>
          <div className='sliderin'>
            <img className='sliderimg' alt='slider' src={ebay} />
          </div>
          <div className='sliderin'>
            <img className='sliderimg' alt='slider' src={ebay} />
          </div>
          <div className='sliderin'>
            <img className='sliderimg' alt='slider' src={ebay} />
          </div>
          <div className='sliderin'>
            <img className='sliderimg' alt='slider' src={ebay} />
          </div>
          <div className='sliderin'>
            <img className='sliderimg' alt='slider' src={ebay} />
          </div>
          <div className='sliderin'>
            <img className='sliderimg' alt='slider' src={ebay} />
          </div>
        </Slider>
      </div>
    );
  }
}