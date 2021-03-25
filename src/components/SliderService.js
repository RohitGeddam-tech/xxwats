import { refresh } from "aos";
import React, { useState, useRef } from "react";
import { NavHashLink } from "react-router-hash-link";
import left from '../img/left.png'
import right from '../img/right.png'

const SliderService = () => {
  const [check, setCheck] = useState(false);
  const [brand, setBrand] = useState(false);
  const [social, setSocial] = useState(false);
  const [video, setVideo] = useState(false);
  const [ground, setGround] = useState(false);
  const [post, setPost] = useState(false);

  const ref = useRef(null)

  console.log(check);

  return (
    <>
      <div className="inputslider">
          <img src={left} alt='arrow'/>
        <div className="inputslide">
          <div className="insideslide">
            <NavHashLink to="/xxwats#services">
              {check ? (
                <label
                  className="serviceslider-afterbtn"
                  onClick={() => {
                    setCheck(false);
                    console.log("creative strategy", check);
                  }}
                >
                  creative strategy
                </label>
              ) : (
                <label
                  className="serviceslider-btn"
                  onClick={() => {
                    setCheck(true);
                    console.log("creative strategy", check);
                  }}
                >
                  creative strategy
                </label>
              )}
              <input
                type="checkbox"
                defaultChecked={check}
                style={{ display: "none" }}
              />
            </NavHashLink>
          </div>
          <div className="insideslide">
            <NavHashLink to="/xxwats#services">
              {brand ? (
                <label
                  className="serviceslider-afterbtn"
                  onClick={() => {
                    setBrand(false);
                    console.log("brand", brand);
                  }}
                >
                  Brand Campaigns
                </label>
              ) : (
                <label
                  className="serviceslider-btn"
                  onClick={() => {
                    setBrand(true);
                    console.log("brand", brand);
                  }}
                >
                  Brand Campaigns
                </label>
              )}
              <input
                type="checkbox"
                defaultChecked={brand}
                style={{ display: "none" }}
              />
            </NavHashLink>
          </div>
          <div className="insideslide">
            <NavHashLink to="/xxwats#services">
              {social ? (
                <label
                  className="serviceslider-afterbtn"
                  onClick={() => {
                    setSocial(false);
                    console.log("social", social);
                  }}
                >
                  Social media Campaigns
                </label>
              ) : (
                <label
                  className="serviceslider-btn"
                  onClick={() => {
                    setSocial(true);
                    console.log("social", social);
                  }}
                >
                  Social media Campaigns
                </label>
              )}
              <input
                type="checkbox"
                defaultChecked={social}
                style={{ display: "none" }}
              />
            </NavHashLink>
          </div>
          <div className="insideslide">
            <NavHashLink to="/xxwats#services">
              {video ? (
                <label
                  className="serviceslider-afterbtn"
                  onClick={() => {
                    setVideo(false);
                    console.log("video", video);
                  }}
                >
                  video campaigns
                </label>
              ) : (
                <label
                  className="serviceslider-btn"
                  onClick={() => {
                    setVideo(true);
                    console.log("video", video);
                  }}
                >
                  video campaigns
                </label>
              )}
              <input
                type="checkbox"
                defaultChecked={video}
                style={{ display: "none" }}
              />
            </NavHashLink>
          </div>
          <div className="insideslide">
            <NavHashLink to="/xxwats#services">
              {ground ? (
                <label
                  className="serviceslider-afterbtn"
                  onClick={() => {
                    setGround(false);
                    console.log("ground", ground);
                  }}
                >
                  on-ground engagements
                </label>
              ) : (
                <label
                  className="serviceslider-btn"
                  onClick={() => {
                    setGround(true);
                    console.log("ground", ground);
                  }}
                >
                  on-ground engagements
                </label>
              )}
              <input
                type="checkbox"
                defaultChecked={ground}
                style={{ display: "none" }}
              />
            </NavHashLink>
          </div>
          <div className="insideslide">
            <NavHashLink to="/xxwats#services">
              {post ? (
                <label
                  className="serviceslider-afterbtn"
                  onClick={() => {
                    setPost(false);
                    console.log("post", post);
                  }}
                >
                  Post-production
                </label>
              ) : (
                <label
                  className="serviceslider-btn"
                  onClick={() => {
                    setPost(true);
                    console.log("post", post);
                  }}
                >
                  Post-production
                </label>
              )}
              <input
                type="checkbox"
                defaultChecked={post}
                style={{ display: "none" }}
              />
            </NavHashLink>
          </div>
        </div>
          <img src={right} alt='arrow'/>
      </div>
    </>
  );
};

export default SliderService;
