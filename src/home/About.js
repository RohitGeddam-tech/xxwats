import React, { useEffect, useState, useRef, useCallback } from "react";
import "./css/about.css";
// import Slider from "../components/Sliding";
import Aos from "aos";
import "aos/dist/aos.css";
import desk from "../img/Frame2.png";
import mob from "../img/Framemob.webp";
import { Fade } from "react-animation-components";
// import MobSlider from "../components/MobSliding";
import { NavHashLink } from "react-router-hash-link";
import Trial from "../components/Trial";

const Desktop = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const colorRef = useRef(null);

  const isInView = () => {
    const rect = window.pageYOffset;
    return rect >= 400 && rect <= 1200;
  };

  const [inView, setInView] = useState(false);

  const scrollHandler = useCallback(() => {
    setInView(isInView());
  }, []);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  const sliderFil = inView ? "slider" : "sliderfill";

  // const trialFil = inView ? "trialSlide" : "trialFill";

  const imag = active ? "frame" : "imag";

  const ifade = active ? "ifade" : "frame";

  const url = active
    ? "https://www.youtube.com/embed/dJIJTZoTj6Q?autoplay=1"
    : "https://www.youtube.com/embed/dJIJTZoTj6Q";

  return (
    <>
      <div ref={colorRef} className="aboutfirst">
        <div className="yellowtab" data-aos="fade-up" data-aos-duration="1000">
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
              <NavHashLink to="/about#top">
                <button className="aboutbtn">More About Us</button>
              </NavHashLink>
            </div>
          </div>
        </div>
        <div className="aboutvideo" data-aos="fade-up" data-aos-duration="100">
          <img
            src={desk}
            alt="reel"
            loading="lazy"
            className={imag}
            onClick={() => {
              setActive(true);
            }}
          />
          <Fade className={ifade} in={active} delay="500">
            {active ? (
              <iframe
                allowFullScreen
                frameBorder="0"
                width="100%"
                height="100%"
                src={url}
                title="vid"
                className="vid"
              />
            ) : (
              <></>
            )}
          </Fade>
        </div>
      </div>
      <div className="sliderbox">
        <div className={sliderFil} data-aos="fade-up" data-aos-duration="1000">
          {/* <Slider /> */}
          <Trial />
        </div>
        <div
          className="slidercover"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="slidecontainer">
            <h4 className="sliderheading">work</h4>
            <h4 className="sliderh1">We do stuff.</h4>
            <NavHashLink
              to={`${process.env.PUBLIC_URL}/20Watts_Master_Deck_compressed.pdf`}
              target="_blank"
            >
              <button className="sliderbtn">Check out our portfolio</button>
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

  const colorRef = useRef(null);

  const isInView = () => {
    const rect = window.pageYOffset;
    return rect >= 150 && rect <= 1300;
  };

  const [inView, setInView] = useState(false);

  const scrollHandler = useCallback(() => {
    setInView(isInView());
  }, []);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  const cssColor = inView ? "mobaboutbtn" : "mobaboutbtn-black";

  const imag = active ? "frame" : "pict";

  const ifade = active ? "fade" : "frame";

  const container = active ? "mob-frame" : "mob-framefill";

  const url = active
    ? "https://www.youtube.com/embed/dJIJTZoTj6Q?autoplay=1"
    : "https://www.youtube.com/embed/dJIJTZoTj6Q";

  return (
    <div ref={colorRef} className="aboutmobile">
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
              <NavHashLink to="/about#top">
                <button className="aboutbtn">More About Us</button>
              </NavHashLink>
            </div>
          </div>
        </div>
        <h4 className="mobheading">work</h4>
        <h4 className="mobh1">We do stuff.</h4>
        <img
          src={desk}
          loading="lazy"
          className={imag}
          alt="reel"
          onClick={() => {
            setActive(true);
          }}
        />
        <Fade className={ifade} in={active} delay="500">
          {active ? (
            <iframe
              allowFullScreen
              frameBorder="0"
              width="100%"
              height="300px"
              src={url}
              title="vid"
              className="vid"
            />
          ) : (
            <></>
          )}
        </Fade>
        <div className={container} data-aos="fade-up" data-aos-duration="1000">
          <Trial />
        </div>
        <div className="alignbtn">
          <NavHashLink
            to={`${process.env.PUBLIC_URL}/20Watts_Master_Deck_compressed.pdf`}
            target="_blank"
          >
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              className={cssColor}
            >
              {/* Meet our team */}
              Check out our portfolio
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

  const colorRef = useRef(null);

  const isInView = () => {
    const rect = window.pageYOffset;
    return rect >= 250 && rect <= 1300;
  };

  const [inView, setInView] = useState(false);

  const scrollHandler = useCallback(() => {
    setInView(isInView());
  }, []);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  const cssColor = inView ? "mobaboutbtn" : "mobaboutbtn-black";

  const imag = active ? "frame" : "tab-pict";

  const ifade = active ? "fade" : "frame";

  const mobFrame = inView ? "mob-frame" : "mob-framefill";

  const mobContainer = inView ? "mob-container" : "mob-containerfill";

  const container = active ? mobFrame : mobContainer;

  const url = active
    ? "https://www.youtube.com/embed/dJIJTZoTj6Q?autoplay=1&controls=1"
    : "https://www.youtube.com/embed/dJIJTZoTj6Q?";

  return (
    <div ref={colorRef} className="aboutmobile">
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
              <NavHashLink to="/about#top">
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
          loading="lazy"
          onClick={() => {
            setActive(true);
          }}
        />
        <Fade className={ifade} in={active} delay="500">
          {active ? (
            <iframe
              allowFullScreen
              frameBorder="0"
              width="100%"
              height="300px"
              src={url}
              title="vid"
              className="vid"
            />
          ) : (
            <></>
          )}
        </Fade>
        <div className={container} data-aos="fade-up" data-aos-duration="1000">
          <Trial />
        </div>
        <div className="alignbtn">
          <NavHashLink
            to={`${process.env.PUBLIC_URL}/20Watts_Master_Deck_compressed.pdf`}
            target="_blank"
          >
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              id="services"
              className={cssColor}
            >
              {/* Meet our team */}
              Check out our portfolio
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
          <div className="largeabout-container">
            <>
              {isTab ? (
                <>{isMobile ? <Mobile /> : <Tab />}</>
              ) : (
                <>{isMobile ? <Tab /> : <Desktop />}</>
              )}
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
