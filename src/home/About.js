import React, { useEffect, useState, useRef } from "react";
import "./css/about.css";
import Slider from "../components/Sliding";
import Aos from "aos";
import "aos/dist/aos.css";
import desk from "../img/Frame2.png";
import mob from "../img/Framemob.jpg";
import { Fade } from "react-animation-components";
import MobSlider from "../components/MobSliding";
import { NavHashLink } from "react-router-hash-link";

const Desktop = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const imag = active ? "frame" : "imag";

  const ifade = active ? "ifade" : "frame";

  const url = active
    ? "https://www.youtube.com/embed/dJIJTZoTj6Q?autoplay=1"
    : "https://www.youtube.com/embed/dJIJTZoTj6Q";

  return (
    <>
      <div className="aboutfirst">
        <div
          className="yellowtab"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="tabcontainer">
            <h4 className="heading">About us</h4>
            <div>
              <h4 className="abouth1">We are champions at ordering food.</h4>
              <p className="aboutpara">
                But when we are not doing that, we are striving for excellence
                in our work process. We are specialists, not generalists, that
                work toward building experiences that elevate and empower
                organisations. Working with you every step of the way to build
                comprehensive, creative and purpose-driven brands and
                experiences.
              </p>
              <NavHashLink to="/xxwats/about#top">
                <button className="aboutbtn">More About Us</button>
              </NavHashLink>
            </div>
          </div>
        </div>
        <div
          className="aboutvideo"
          data-aos="fade-up"
          data-aos-duration="100"
        >
          <img
            src={desk}
            alt="reel"
            loading='lazy'
            className={imag}
            onClick={() => {
              setActive(true);
            }}
          />
          <Fade className={ifade} in={active} delay="500">
            <iframe
              allowFullScreen
              frameBorder="0"
              width="100%"
              height="100%"
              src={url}
              title="vid"
              className="vid"
            />
          </Fade>
        </div>
      </div>
      <div className="sliderbox">
        <div className="slider" data-aos="fade-up" data-aos-duration="1000">
          <Slider />
        </div>
        <div
          className="slidercover"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="slidecontainer">
            <h4 className="sliderheading">work</h4>
            <h4 className="sliderh1">We do stuff.</h4>
            <NavHashLink to="/xxwats/about#mid">
              <button className="sliderbtn">Meet our team</button>
            </NavHashLink>
          </div>
        </div>
      </div>
    </>
  );
};

const Tab = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const imag = active ? "frame" : "tab-pict";

  const ifade = active ? "fade" : "frame";

  const container = active ? "mob-frame" : "tab-container";

  const url = active
    ? "https://www.youtube.com/embed/dJIJTZoTj6Q?autoplay=1"
    : "https://www.youtube.com/embed/dJIJTZoTj6Q";

  return (
    <div className="aboutmobile">
      <div
        className="mob-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="yellowtabmob">
          <div className="tabmobcontainer">
            <h4 className="heading">About us</h4>
            <h4 className="abouth1">We are champions at ordering food.</h4>
            <p className="aboutpara">
              But when we are not doing that, we are striving for excellence in
              our work process. We are specialists, not generalists, that work
              toward building experiences that elevate and empower
              organisations. Working with you every step of the way to build
              comprehensive, creative and purpose-driven brands and experiences.
            </p>
            <div className="alignbtn">
              <NavHashLink to="/xxwats/about#top">
                <button className="aboutbtn">More About Us</button>
              </NavHashLink>
            </div>
          </div>
        </div>
        <h4 className="mobheading">work</h4>
        <h4 className="mobh1">We do stuff.</h4>
        <img
          src={mob}
          loading='lazy'
          className={imag}
          alt="reel"
          onClick={() => {
            setActive(true);
          }}
        />
        <Fade className={ifade} in={active} delay="500">
          <iframe
            allowFullScreen
            frameBorder="0"
            width="100%"
            height="300px"
            src={url}
            title="vid"
            className="vid"
          />
        </Fade>
        <div className={container} data-aos="fade-up" data-aos-duration="1000">
          <MobSlider />
        </div>
        <div className="alignbtn">
          <NavHashLink to="/xxwats/about#mid">
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              className="mobaboutbtn"
            >
              Meet our team
            </button>
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

const Mobile = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const imag = active ? "frame" : "tab-pict";

  const ifade = active ? "fade" : "frame";

  const container = active ? "mob-frame" : "mob-container";

  const url = active
    ? "https://www.youtube.com/embed/dJIJTZoTj6Q?autoplay=1&controls=1"
    : "https://www.youtube.com/embed/dJIJTZoTj6Q?";

  return (
    <div className="aboutmobile">
      <div className="mobcontainer" data-aos="fade-up" data-aos-duration="1000">
        <div className="yellowtabmob">
          <div className="tabmobcontainer">
            <h4 className="heading">About us</h4>
            <h4 className="abouth1">We are champions at ordering food.</h4>
            <p className="aboutpara">
              But when we are not doing that, we are striving for excellence in
              our work process. We are specialists, not generalists, that work
              toward building experiences that elevate and empower
              organisations. Working with you every step of the way to build
              comprehensive, creative and purpose-driven brands and experiences.
            </p>
            <div className="alignbtn">
              <NavHashLink to="/xxwats/about#top">
                <button className="aboutbtn">More About Us</button>
              </NavHashLink>
            </div>
          </div>
        </div>
        <h4 className="mobheading">work</h4>
        <h4 className="mobh1">We do stuff.</h4>
        <img
          src={mob}
          className={imag}
          alt="reel"
          loading='lazy'
          onClick={() => {
            setActive(true);
          }}
        />
        <Fade className={ifade} in={active} delay="500">
          <iframe
            allowFullScreen
            frameBorder="0"
            width="100%"
            height="300px"
            src={url}
            title="vid"
            className="vid"
          />
        </Fade>
        <div className={container} data-aos="fade-up" data-aos-duration="1000">
          <MobSlider />
        </div>
        <div className='alignbtn'>
        <NavHashLink to="/xxwats/about#mid">
          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            id="services"
            className="mobaboutbtn"
          >
            Meet our team
          </button>
        </NavHashLink>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [isTab, setTab] = useState(
    window.matchMedia("(max-width:800px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTab(window.matchMedia("(max-width:800px)").matches);
    });
  });

  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:600px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:600px)").matches);
    });
  });

  const [isDesktop, setDesktop] = useState(
    window.matchMedia("(max-width:1400px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDesktop(window.matchMedia("(max-width:1400px)").matches);
    });
  });

  return (
    <>
      {isDesktop ? (
        <>
          {isTab ? (
            <>{isMobile ? <Mobile /> : <Tab />}</>
          ) : (
            <>{isMobile ? <Tab /> : <Desktop />}</>
          )}
        </>
      ) : (
        <div className="largeabout">
          <>
            {isTab ? (
              <>{isMobile ? <Mobile /> : <Tab />}</>
            ) : (
              <>{isMobile ? <Tab /> : <Desktop />}</>
            )}
          </>
        </div>
      )}
    </>
  );
};

export default About;
