import React, { useState, useEffect, useRef, useCallback } from "react";
import "./css/Intro.css";
import { NavLink } from "react-router-dom";
// import Svg from "../components/SvgTall";
import Aos from "aos";
import "aos/dist/aos.css";
import light from "../img/light-tall.svg";
import logo from "../img/logo.svg";

const DeskIntro = ({ colorText }) => {
  const colorRef = useRef(null);

  const isInView = () => {
    return window.pageYOffset >= 410;
  };

  const [inView, setInView] = useState(true);

  const scrollHandler = useCallback(() => {
    setInView(isInView());
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500 });
    setInView(false);
  }, []);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className="container">
      <div className="home">
        <div ref={colorRef} className="image" data-aos="fade-up" data-aos-duration="1000">
          {inView ? <img src={light} alt="light" /> : <img src={logo} alt="light" />}
        </div>
        <div className="content" data-aos="fade-up" data-aos-duration="2000">
          <p className="para">WE GIVE CREATIVE SOLUTIONS FOR YOUR PROBLEMS</p>
          <NavLink to={`${process.env.PUBLIC_URL}/20Watts_Master_Deck_compressed.pdf`} target="_blank" className="btn">
            Check Out Our Portfolio
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const MobIntro = () => {
  const colorRef = useRef(null);

  const isInView = () => {
    return window.pageYOffset >= 150;
  };

  const [inView, setInView] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 500 });
    setInView(false);
  }, []);

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

  return (
    <div ref={colorRef} className="container">
      <div className="mobhome">
        <div className="mobileimage" data-aos="fade-up" data-aos-duration="1000">
          {inView ? (
            <div style={{ minHeight: "100vh !important", width: "100%" }}>
              <img src={light} alt="light" />
            </div>
          ) : (
            <div style={{ minHeight: "100vh !important", width: "100%" }}>
              <img src={logo} alt="light" />
            </div>
          )}
        </div>
        <div className="mobcontent" data-aos="fade-up" data-aos-duration="2000">
          <p className="mobpara">WE GIVE CREATIVE SOLUTIONS FOR YOUR PROBLEMS</p>
          <NavLink to={`${process.env.PUBLIC_URL}/20Watts_Master_Deck_compressed.pdf`} target="_blank" className="mobbtn">
            Check Out Our Portfolio
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const Intro = ({ textColor }) => {
  const [isMobile, setMobile] = useState(window.matchMedia("(max-width:800px)").matches);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:800px)").matches);
    });
  });

  const [isDesktop, setDesktop] = useState(window.matchMedia("(max-width:1400px)").matches);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDesktop(window.matchMedia("(max-width:1400px)").matches);
    });
  });

  return (
    <>
      {isDesktop ? (
        <div className="Intro">{isMobile ? <MobIntro /> : <DeskIntro />}</div>
      ) : (
        <div className="largeIntro">
          <div className="large-container">{isMobile ? <MobIntro colorText={textColor} /> : <DeskIntro colorText={textColor} />}</div>
        </div>
      )}
    </>
  );
};

export default Intro;
