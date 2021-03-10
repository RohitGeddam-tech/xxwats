import React, { Component } from 'react'
import Slider from 'react-slick';

export class ServiceSlider extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: true,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            speed:500,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                      dots: false,
                      arrows: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay:false,
                      speed:100,
                    }
                },
                {
                  breakpoint: 750,
                  settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay:false,
                    speed:100,
                  }
                },
              {
                breakpoint: 660,
                settings: {
                  dots: false,
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay:false,
                  speed:100,
                }
              },
              {
                breakpoint: 300,
                settings: {
                  dots: false,
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay:false,
                  speed:100,
                }
              },
            ]
          };
        return (
            <div className='slideservice'>
                <Slider {...settings}>
                    <div className='serviceslide'>
                        <button className='serviceslider-btn'>Creative Strategy</button>
                    </div>
                    <div  className='serviceslide'>
                        <button className='serviceslider-btn'>Brand Campaigns</button>
                    </div>
                    <div  className='serviceslide'>
                        <button className='serviceslider-btn'>Social media Campaigns</button>
                    </div>
                    <div  className='serviceslide'>
                        <button className='serviceslider-btn'>video campaigns</button>
                    </div>
                    <div  className='serviceslide'>
                        <button className='serviceslider-btn'>on-ground engagements</button>
                    </div>
                    <div  className='serviceslide'>
                        <button className='serviceslider-btn'>Post-production</button>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default ServiceSlider
