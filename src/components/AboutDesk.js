import React, { useEffect } from "react";
import call from "../img/icons/icon-call.svg";
import map from "../img/icons/icon-maps.svg";
import mail from "../img/icons/icon-mail.svg";
import insta from "../img/icons/icon-instagram.svg";
import youtube from "../img/icons/icon-youtube.svg";
import facebook from "../img/icons/icon-facebook.svg";
import twitter from "../img/icons/icon-twitter.svg";
import logotall from "../img/logo/logo-tall.svg";
import linked from "../img/icons/linkedin.webp";
import join from "../img/icons/icon-join.svg";

import Form from "./Form";
import Aos from "aos";
import "aos/dist/aos.css";
// import ServiceSlider from "./ServiceSlider";

const HireDesk = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <>
      {/* <div className="desktitle-container">
        <h4 className="firstdesk-title">hire us</h4>
      </div> */}
      <div className="hire-container">
        <div className="first-box" data-aos="fade-up" data-aos-duration="1000">
          <div className="first-box-container">
            <h4 className="first-quote">Drop by for a cup of kadak chai</h4>
            <div className="icons">
              <div className="icons-msg">
                <a href="https://goo.gl/maps/c8GL4atzL95z5YP79">
                  <img loading="lazy" alt="call" src={map} />
                </a>
                <a
                  href="https://goo.gl/maps/c8GL4atzL95z5YP79"
                  className="location-title"
                >
                  May Flower, 2nd & 3rd floor, New Kantwadi, Off Perry Cross
                  Road, Bandra West, Mumbai 400 050
                </a>
              </div>
              <div className="icons-msg">
                <a href="tel:+919820353013">
                  <img loading="lazy" alt="call" src={call} />
                </a>
                <a href="tel:+919820353013" className="call-title">
                  +919820353013
                </a>
              </div>
              <div className="icons-msg">
                <a href="mailto:shoutout@xxwatts.com">
                  <img loading="lazy" alt="call" src={mail} />
                </a>
                <a href="mailto:shoutout@xxwatts.com" className="mail-title">
                  shoutout@xxwatts.com
                </a>
              </div>
            </div>
            <div className="careers">
              <h1>For Careers :</h1>
              <a href="mailto:hr@xxwatts.com">
                <img loading="lazy" src={join} alt="join" /> hr@xxwatts.com
              </a>
            </div>
            <div className="follow">
              <h4 className="first-title">follow us</h4>
              <div className="social">
                <a
                  href="https://www.instagram.com/xxwatts/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "10px" }}
                >
                  <img loading="lazy" src={insta} alt="instagram" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCQJvgX3x3djvQ327y3LUmmA"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "25px" }}
                >
                  <img loading="lazy" src={youtube} alt="youtube" />
                </a>
                <a
                  href="https://www.facebook.com/xxwatts/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "25px" }}
                >
                  <img loading="lazy" src={facebook} alt="facebook" />
                </a>
                <a
                  href="https://twitter.com/20xxwatts"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "25px" }}
                >
                  <img loading="lazy" src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://in.linkedin.com/company/xxwatts"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "25px", opacity: "0.85" }}
                >
                  <img loading="lazy" src={linked} alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-box" data-aos="fade-up" data-aos-duration="1000">
          <div className="second-box-container">
            <h4 className="first-quote">
              Someone said work? Tell us Watt’s up?
            </h4>
            <h4 className="second-quote">We'd love to hear about it! </h4>
            <div className="service-slider">
              <h4 className="service-title">Services</h4>
            </div>
            <div className="service-form">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="deskfoot">
        <div className="footimg">
          <img loading="lazy" src={logotall} alt="bottom-logo" />
          {/* <SvgTall classname={'yellow'} gradient1={'yellow-gradient-1'} gradient0={'yellow-gradient-0'}/> */}
        </div>
      </div>
    </>
  );
};

export default HireDesk;
