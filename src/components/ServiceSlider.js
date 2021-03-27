import React, { Component } from "react";
import Slider from "react-slick";

export class ServiceSlider extends Component {
  state = {
    check: false,
    brand: false,
    social: false,
    video: false,
    ground: false,
    post: false,
  };

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      speed: 500,
      responsive: [
        {
          breakpoint: 1050,
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
    return (
      <div className="slideservice">
        <Slider {...settings}>
          <div className="insideslide">
            {this.state.check ? (
              <label
                className="serviceslider-afterbtn"
                onClick={() => {
                  this.setState({ check: false });
                  console.log("creative strategy", this.state.check);
                }}
              >
                creative strategy
              </label>
            ) : (
              <label
                className="serviceslider-btn"
                onClick={() => {
                  this.setState({ check: true });
                  console.log("creative strategy", this.state.check);
                }}
              >
                creative strategy
              </label>
            )}
            <input
              type="checkbox"
              defaultChecked={this.state.check}
              style={{ display: "none" }}
            />
          </div>
          <div className="insideslide">
            {this.state.brand ? (
              <label
                className="serviceslider-afterbtn"
                onClick={() => {
                  this.setState({ brand: false });
                  console.log("brand", this.state.brand);
                }}
              >
                Brand Campaigns
              </label>
            ) : (
              <label
                className="serviceslider-btn"
                onClick={() => {
                  this.setState({ brand: true });
                  console.log("brand", this.state.brand);
                }}
              >
                Brand Campaigns
              </label>
            )}
            <input
              type="checkbox"
              defaultChecked={this.state.brand}
              style={{ display: "none" }}
            />
          </div>
          <div className="insideslide">
            {this.state.social ? (
              <label
                className="serviceslider-afterbtn"
                onClick={() => {
                  this.setState({ social: false });
                  console.log("social", this.state.social);
                }}
              >
                Social media Campaigns
              </label>
            ) : (
              <label
                className="serviceslider-btn"
                onClick={() => {
                  this.setState({ social: true });
                  console.log("social", this.state.social);
                }}
              >
                Social media Campaigns
              </label>
            )}
            <input
              type="checkbox"
              defaultChecked={this.state.social}
              style={{ display: "none" }}
            />
          </div>
          <div className="insideslide">
            {this.state.video ? (
              <label
                className="serviceslider-afterbtn"
                onClick={() => {
                  this.setState({ video: false });
                  console.log("video", this.state.video);
                }}
              >
                video campaigns
              </label>
            ) : (
              <label
                className="serviceslider-btn"
                onClick={() => {
                  this.setState({ video: true });
                  console.log("video", this.state.video);
                }}
              >
                video campaigns
              </label>
            )}
            <input
              type="checkbox"
              defaultChecked={this.state.video}
              style={{ display: "none" }}
            />
          </div>
          <div className="insideslide">
            {this.state.ground ? (
              <label
                className="serviceslider-afterbtn"
                onClick={() => {
                  this.setState({ ground: false });
                  console.log("ground", this.state.ground);
                }}
              >
                on-ground engagements
              </label>
            ) : (
              <label
                className="serviceslider-btn"
                onClick={() => {
                  this.setState({ ground: true });
                  console.log("ground", this.state.ground);
                }}
              >
                on-ground engagements
              </label>
            )}
            <input
              type="checkbox"
              defaultChecked={this.state.ground}
              style={{ display: "none" }}
            />
          </div>
          <div className="insideslide">
            {this.state.post ? (
              <label
                className="serviceslider-afterbtn"
                onClick={() => {
                  this.setState({ post: false });
                  console.log("post", this.state.post);
                }}
              >
                Post-production
              </label>
            ) : (
              <label
                className="serviceslider-btn"
                onClick={() => {
                  this.setState({ post: true });
                  console.log("post", this.state.post);
                }}
              >
                Post-production
              </label>
            )}
            <input
              type="checkbox"
              defaultChecked={this.state.post}
              style={{ display: "none" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ServiceSlider;
