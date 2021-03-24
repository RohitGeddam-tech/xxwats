import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const SliderService = () => {
  const [check, setCheck] = useState(false);
  const [brand, setBrand] = useState(false);
  const [social, setSocial] = useState(false);
  const [video, setVideo] = useState(false);
  const [ground, setGround] = useState(false);
  const [post, setPost] = useState(false);

  console.log(check);

  return (
    <>
      <div className="inputslider">
        <div className="inputslide">
          <div className="insideslide">
            <NavHashLink to="/xxwats#services">
              {check ? (
                <label
                  className="serviceslider-aftercheckbtn"
                  onClick={() => {
                    setCheck(false);
                    console.log("creative strategy", check);
                  }}
                >
                  creative strategy
                </label>
              ) : (
                <label
                  className="serviceslider-checkbtn"
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
                  className="serviceslider-afterbrandbtn"
                  onClick={() => {
                    setBrand(false);
                    console.log("brand", brand);
                  }}
                >
                  Brand Campaigns
                </label>
              ) : (
                <label
                  className="serviceslider-brandbtn"
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
                  className="serviceslider-aftersocbtn"
                  onClick={() => {
                    setSocial(false);
                    console.log("social", social);
                  }}
                >
                  Social media Campaigns
                </label>
              ) : (
                <label
                  className="serviceslider-socbtn"
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
                  className="serviceslider-aftervidbtn"
                  onClick={() => {
                    setVideo(false);
                    console.log("video", video);
                  }}
                >
                  video campaigns
                </label>
              ) : (
                <label
                  className="serviceslider-vidbtn"
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
                  className="serviceslider-aftergrbtn"
                  onClick={() => {
                    setGround(false);
                    console.log("ground", ground);
                  }}
                >
                  on-ground engagements
                </label>
              ) : (
                <label
                  className="serviceslider-grbtn"
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
                  className="serviceslider-afterpostbtn"
                  onClick={() => {
                    setPost(false);
                    console.log("post", post);
                  }}
                >
                  Post-production
                </label>
              ) : (
                <label
                  className="serviceslider-postbtn"
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
      </div>
    </>
  );
};

export default SliderService;
