import React, { useState, useEffect } from "react";
import "../home/css/Intro.css";
import home from "../img/bunnies.png";
import Aos from "aos";
import "aos/dist/aos.css";

const DeskIntro = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <div className="container">
      <div className="fahome">
        <div
          className="firstfaimage"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="bunny">
            <img loading='lazy' src={home} alt="logo" />
          </div>
        </div>
        <div
          className="facontent"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4 className="fafirst-title">Who are we? </h4>
          <p className="faquote">And how do we help you?</p>
          <p className="fapara">
            We don’t believe in thinking outside the box. We don’t think inside
            the box either. We don’t believe in boxes, to be honest. Unless it’s
            a box of chocolates. Or cake. Or puppies. Irrespective of where we
            think, we think fun, we think quirky and we think anything that
            helps your brand develop a unique voice and a shining persona that
            stands out in the crowd.
          </p>
        </div>
      </div>
    </div>
  );
};

const MobIntro = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <div className="container">
      <div className="mobhome">
        <div
          className="mobileimage"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img loading='lazy' src={home} alt="logo" />
        </div>
        <div
          className="famobcontent"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4 className="fafirst-mobtitle">Who are we? </h4>
          <p className="famobquote">And how do we help you?</p>
          <p className="famobpara">
            We don’t believe in thinking outside the box. We don’t think inside
            the box either. We don’t believe in boxes, to be honest. Unless it’s
            a box of chocolates. Or cake. Or puppies. Irrespective of where we
            think, we think fun, we think quirky and we think anything that
            helps your brand develop a unique voice and a shining persona that
            stands out in the crowd.
          </p>
        </div>
      </div>
    </div>
  );
};

const Intro = () => {
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
    <div className="Intro">
      {isDesktop ? (
        <>{isMobile ? <MobIntro /> : <DeskIntro />}</>
      ) : (
        <div className="largeIntro">
          <div className='largeabout-container'>
            {isMobile ? <MobIntro /> : <DeskIntro />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
