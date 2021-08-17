import React, { useEffect } from "react";
import call from "../img/icons/icon-call.svg";
import map from "../img/icons/icon-maps.svg";
import mail from "../img/icons/icon-mail.svg";
import insta from "../img/icons/icon-instagram.svg";
import youtube from "../img/icons/icon-youtube.svg";
import facebook from "../img/icons/icon-facebook.svg";
import twitter from "../img/icons/icon-twitter.svg";
import linked from "../img/icons/linkedin.webp";
import join from "../img/icons/icon-join.svg";

import SvgTall from "./SvgTall";
import Form from "./Form";
import Aos from "aos";
import "aos/dist/aos.css";

const HireMob = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <>
      {/* <div className="title-container" style={{ width: "95% !important" }}>
        <h4 className="first-title">hire us</h4>
      </div> */}
      <div className="hire-mobcontainer">
        <div
          className="second-mobbox"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="second-mobbox-container">
            <h4 className="second-title">
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
        <div
          className="first-mobbox"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="first-box-mobcontainer">
            <h4 style={{ paddingTop: "30px" }} className="first-quote">
              Drop by for a cup of kadak chai
            </h4>
            <div className="mobicons">
              <div className="icons-mobmsg">
                <a
                  href="https://goo.gl/maps/c8GL4atzL95z5YP79"
                  style={{ width: "70%" }}
                  className="location-title"
                >
                  May Flower, 2nd & 3rd floor, New Kantwadi, Off Perry Cross
                  Road, Bandra West, Mumbai 400 050
                </a>
                <a href="https://goo.gl/maps/c8GL4atzL95z5YP79">
                  <img loading="lazy" alt="call" src={map} />
                </a>
              </div>
              <div className="icons-mobmsg">
                <a
                  style={{ marginTop: "10px" }}
                  href="tel:+919820353013"
                  className="call-title"
                >
                  +919820353013
                </a>
                <a href="tel:+919820353013">
                  <img loading="lazy" alt="call" src={call} />
                </a>
              </div>
              <div style={{ marginTop: "30px" }} className="icons-mobmsg">
                <a href="mailto:shoutout@xxwatts.com" className="mail-title">
                  shoutout@xxwatts.com
                </a>
                <a href="mailto:shoutout@xxwatts.com">
                  <img loading="lazy" alt="call" src={mail} />
                </a>
              </div>
            </div>
            <div className="careers">
              <h1>For Careers :</h1>
              <div className="icons-mobmsgbot">
                <a href="mailto: hr@xxwatts.com" className="mail-title">
                  hr@xxwatts.com
                </a>
                <a href="mailto: hr@xxwatts.com">
                  <img loading="lazy" alt="join" src={join} />
                </a>
              </div>
              {/* <a href="mailto:hr@xxwatts.com">
                <img loading='lazy' src={join} alt='join' />  hr@xxwatts.com</a> */}
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
        <div className="mobhome">
          <div className="mobimage" style={{ width: "100%" }}>
            <SvgTall
              classname={"black"}
              gradient1={"black-gradient-1"}
              gradient0={"black-gradient-0"}
              height="190px"
              width="160px"
              textname="black"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HireMob;
