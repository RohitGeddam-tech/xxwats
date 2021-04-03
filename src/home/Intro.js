import React, { useState, useEffect, useRef } from "react";
import "./css/Intro.css";
import { NavHashLink } from "react-router-hash-link";
import Svg from "../components/SvgTall";
import Aos from "aos";
import "aos/dist/aos.css";
import light from '../img/light-tall.svg'
import logo from '../img/logo/logo-tall.svg'

const DeskIntro = ({ colorText }) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const colorRef = useRef(null);

  const isInView = () => {
    const refColor = colorRef.current;
    const rect = window.pageYOffset;
    return rect >= 250;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return (
    <div className="container">
      <div className="home">
        <div
          ref={colorRef}
          className="image"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {inView ? (
            <img src={light} alt='light' />
          ) : (
            <img src={logo} alt='light' />
          )}
        </div>
        <div className="content" data-aos="fade-up" data-aos-duration="2000">
          <p className="para">WE GIVE CREATIVE SOLUTIONS FOR YOUR PROBLEMS</p>
          <NavHashLink to="/xxwats/contact#top" className="btn">
            Check Out Our Portfolio
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

const MobIntro = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const colorRef = useRef(null);

  const isInView = () => {
    const refColor = colorRef.current;
    const rect = window.pageYOffset;
    return rect >= 150;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return (
    <div ref={colorRef} className="container">
      <div className="mobhome">
        <div
          className="mobileimage"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {inView ? (
            <div style={{minHeight:'100vh !important', width:'100%'}}>
            <img src={light} alt='light' />
            </div>
          ) : (
            <div style={{minHeight:'100vh !important', width:'100%'}}>
             <img src={logo} alt='light' />
            </div>
          )}
        </div>
        <div className="mobcontent" data-aos="fade-up" data-aos-duration="2000">
          <p className="mobpara">
            WE GIVE CREATIVE SOLUTIONS FOR YOUR PROBLEMS
          </p>
          <NavHashLink to="/xxwats/contact#top" className="mobbtn">
            Check Out Our Portfolio
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

const Intro = ({ textColor }) => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:800px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:800px)").matches);
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
        <div className="Intro">{isMobile ? <MobIntro /> : <DeskIntro />}</div>
      ) : (
        <div className="largeIntro">
          <div className="large-container">
          {isMobile ? (
            <MobIntro colorText={textColor} />
          ) : (
            <DeskIntro colorText={textColor} />
          )}
          </div>
        </div>
      )}
    </>
  );
};

export default Intro;
