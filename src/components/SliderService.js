import React, { useState } from "react";
// import Form from "./Form";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SliderService = () => {
  const [check, setCheck] = useState(false);
  const [brand, setBrand] = useState(false);
  const [social, setSocial] = useState(false);
  const [video, setVideo] = useState(false);
  const [ground, setGround] = useState(false);
  const [post, setPost] = useState(false);

  const checkedboxes = {
    creative: { checked: check, value: "Creative Strategy" },
    brand: { checked: brand, value: "Branding Camapign" },
    social: { checked: social, value: "Social Media Camapign" },
    video: { checked: video, value: "Video Camapign" },
    ground: { checked: ground, value: "On-ground Engagements" },
    post: { checked: post, value: "Post Production" },
  };

  return (
    <>
      <div className="inputslider">
        <div className="inputslide">
          <div className="insideslide">
            {check ? (
              <label
                className="serviceslide-afterbtn"
                onClick={() => {
                  setCheck(false);
                  console.log("creative strategy", check);
                }}
              >
                creative strategy
              </label>
            ) : (
              <label
                className="serviceslide-btn"
                onClick={() => {
                  setCheck(true);
                  console.log("creative strategy", check);
                }}
              >
                creative strategy
              </label>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  checked={check}
                  onChange={(e) => {
                    setCheck(e.target.value);
                  }}
                />
              }
              label="Check me"
              style={{ display: "none" }}
            />
          </div>
          <div className="insideslide">
            {brand ? (
              <label
                className="serviceslide-afterbtn"
                onClick={() => {
                  setBrand(false);
                  console.log("brand", brand);
                }}
              >
                Brand Campaigns
              </label>
            ) : (
              <label
                className="serviceslide-btn"
                onClick={() => {
                  setBrand(true);
                  console.log("brand", brand);
                }}
              >
                Brand Campaigns
              </label>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  checked={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
              }
              label="Check me"
              style={{ display: "none" }}
            />
          </div>
          <div className="insideslide">
            {social ? (
              <label
                className="serviceslide-afterbtn"
                onClick={() => {
                  setSocial(false);
                  console.log("social", social);
                }}
              >
                Social media Campaigns
              </label>
            ) : (
              <label
                className="serviceslide-btn"
                onClick={() => {
                  setSocial(true);
                  console.log("social", social);
                }}
              >
                Social media Campaigns
              </label>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  checked={social}
                  onChange={(e) => {
                    setSocial(e.target.value);
                  }}
                />
              }
              label="Check me"
              style={{ display: "none" }}
            />
          </div>
          <div className="insideslide">
            {video ? (
              <label
                className="serviceslide-afterbtn"
                onClick={() => {
                  setVideo(false);
                  console.log("video", video);
                }}
              >
                video campaigns
              </label>
            ) : (
              <label
                className="serviceslide-btn"
                onClick={() => {
                  setVideo(true);
                  console.log("video", video);
                }}
              >
                video campaigns
              </label>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  checked={video}
                  onChange={(e) => {
                    setVideo(e.target.value);
                  }}
                />
              }
              label="Check me"
              style={{ display: "none" }}
            />
          </div>
          <div className="insideslide">
            {ground ? (
              <label
                className="serviceslide-afterbtn"
                onClick={() => {
                  setGround(false);
                  console.log("ground", ground);
                }}
              >
                on-ground engagements
              </label>
            ) : (
              <label
                className="serviceslide-btn"
                onClick={() => {
                  setGround(true);
                  console.log("ground", ground);
                }}
              >
                on-ground engagements
              </label>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  checked={ground}
                  onChange={(e) => {
                    setGround(e.target.value);
                  }}
                />
              }
              label="Check me"
              style={{ display: "none" }}
            />
          </div>
          <div className="insideslide">
            {post ? (
              <label
                className="serviceslide-afterbtn"
                onClick={() => {
                  setPost(false);
                  console.log("post", post);
                }}
              >
                Post-production
              </label>
            ) : (
              <label
                className="serviceslide-btn"
                onClick={() => {
                  setPost(true);
                  console.log("post", post);
                }}
              >
                Post-production
              </label>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  checked={post}
                  onChange={(e) => {
                    setPost(e.target.value);
                  }}
                />
              }
              label="Check me"
              style={{ display: "none" }}
            />
          </div>
        </div>
        {/* <div style={{ display: "none" }}>
          <Form checkboxState={checkedboxes} />
        </div> */}
      </div>
    </>
  );
};

export default SliderService;
