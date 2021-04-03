import React, { useEffect } from "react";
import call from "../img/icons/icon-call.svg";
import map from "../img/icons/icon-maps.svg";
import mail from "../img/icons/icon-mail.svg";
import insta from "../img/icons/icon-instagram.svg";
import youtube from "../img/icons/icon-youtube.svg";
import facebook from "../img/icons/icon-facebook.svg";
import twitter from "../img/icons/icon-twitter.svg";
import join from '../img/icons/icon-join.svg'

import Slideservice from "../components/SliderService";
import Serv from './ServiceSlider'
import Form from "../components/Form";
import SvgTall from "../components/SvgTall";
import Aos from "aos";
import "aos/dist/aos.css";

const HireDesk = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <>
      <div className="desktitle-container">
        <h4 className="firstdesk-title">hire us</h4>
      </div>
      <div className="hire-container">
        <div
          className="first-box"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="first-box-container">
            <h4 className="first-quote">Drop by for a cup of kadak chai</h4>
            <div className="icons">
              <div className="icons-msg">
                <a href="https://goo.gl/maps/G9r5WEvrA2cfQ9Z18">
                  <img loading='lazy' alt="call" src={map} />
                </a>
                <a
                  href="https://goo.gl/maps/G9r5WEvrA2cfQ9Z18"
                  className="location-title"
                >
                  37/B, Perry Cross Rd, Bandra West, Mumbai, Maharashtra, India,
                  400050
                </a>
              </div>
              <div className="icons-msg">
                <a href="tel:+919820353013">
                  <img loading='lazy' alt="call" src={call} />
                </a>
                <a href="tel:+919820353013" className="call-title">
                  +919820353013
                </a>
              </div>
              <div className="icons-msg">
                <a href="mailto:shoutout@xxwatts.com">
                  <img loading='lazy' alt="call" src={mail} />
                </a>
                <a href="mailto:shoutout@xxwatts.com" className="mail-title">
                  shoutout@xxwatts.com
                </a>
              </div>
            </div>
            <div className="follow">
              <h4 className="first-title">follow us</h4>
              <div className="social">
                <a style={{ marginLeft: "10px" }}>
                  <img loading='lazy' src={insta} alt="insta" />
                </a>
                <a style={{ marginLeft: "10%" }}>
                  <img loading='lazy' src={youtube} alt="insta" />
                </a>
                <a style={{ marginLeft: "10%" }}>
                  <img loading='lazy' src={facebook} alt="insta" />
                </a>
                <a style={{ marginLeft: "10%" }}>
                  <img loading='lazy' src={twitter} alt="insta" />
                </a>
              </div>
            </div>
            <div className="careers">
              <h1>For Careers :</h1>
              <div className="icons-msgbot">
                <a href="mailto:hr@xxwatts.com">
                  <img loading='lazy' alt="join" src={join} />
                </a>
                <a href="mailto:hr@xxwatts.com" className="mail-title">
                  hr@xxwatts.com
                </a>
              </div>
              {/* <a href="mailto:hr@xxwatts.com">
                <img loading='lazy' src={join} alt='join' />  hr@xxwatts.com</a> */}
            </div>
          </div>
        </div>
        <div
          className="second-box"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="second-box-container">
            <h4 className="second-title">A project with 20 Watts?</h4>
            <h4 className="second-quote">We'd love to hear about it! </h4>
            <div className="service-slider">
              <h4 className="service-title">Services</h4>
              {/* <Service /> */}
              {/* <Slideservice /> */}
              <Serv />
            </div>
            <div className="service-form">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="deskfoot">
        <div className="footimg">
          <SvgTall
            classname={"black"}
            gradient1={"black-gradient-1"}
            gradient0={"black-gradient-0"}
            height='190px'
            width='214px'
            textname='black'
          />
        </div>
      </div>
    </>
  );
};

export default HireDesk;
