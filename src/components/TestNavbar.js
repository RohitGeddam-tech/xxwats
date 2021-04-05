import React, { useEffect, useState } from "react";
import "./css/Nav.css";
import { Fade } from "react-animation-components";
import { NavHashLink } from "react-router-hash-link";
import Svg from "../components/Svg";
import Ham from "./Hamburger";
import XHam from "./Xham";

const TestDesk = () => {
  const [isActive, setActive] = useState(false);

  let colored = isActive ? "collapse-navbar" : "navbar";
  let header = isActive ? "headerfull" : "header";
  let fade = isActive ? "fade" : "dnone";
  return (
    <>
      <div className={colored}>
        <div className={header}>
          {isActive ? (
            <nav className="container-fullnav">
              <div className="nav-image">
                <NavHashLink to="/#top">
                  <Svg className={"white"} imagegradient0={"yellow-gradient-0"} imagegradient1={"yellow-gradient-1"} imagename={"yellow"} title={"white"} />
                </NavHashLink>
              </div>
            </nav>
          ) : (
            <nav className="container-nav">
              <div className="nav-image">
                <NavHashLink to="/#top">
                  <Svg className={"pink"} imagegradient0={"black-gradient-0"} imagegradient1={"black-gradient-1"} imagename={"black"} title={"black"} />
                </NavHashLink>
              </div>
            </nav>
          )}
          <div className="nav-links">
            {isActive ? (
              <>
                <XHam
                  ClickHandle={() => {
                    setActive(!isActive);
                  }}
                />
              </>
            ) : (
              <Ham
                ClickHandle={() => {
                  setActive(!isActive);
                }}
              />
            )}
          </div>
        </div>
        <div className={fade}>
          <NavHashLink to="/#top" className="navdeskfade">
            <Fade in={isActive} delay="500">
              Home
            </Fade>
          </NavHashLink>
          <NavHashLink to="/about#top" className="navdeskfade">
            <Fade in={isActive} delay="700">
              About us
            </Fade>
          </NavHashLink>
          <NavHashLink to="/contact#top" className="navdeskfade">
            <Fade in={isActive} delay="900">
              Contact Us
            </Fade>
          </NavHashLink>
        </div>
      </div>
    </>
  );
};

const TestMob = () => {
  const [isActive, setActive] = useState(false);

  let colored = isActive ? "collapse-navbar" : "navbar";
  let header = isActive ? "headerfull" : "header";
  let fade = isActive ? "fade" : "dnone";
  // let hamcolor = isActive ? "#fff" : "#202020";
  return (
    <>
      <div className={colored}>
        <div className={header}>
          {isActive ? (
            <nav className="container-fullnav">
              <div className="nav-image">
                <NavHashLink to="/#top">
                  <Svg className={"white"} imagegradient0={"yellow-gradient-0"} imagegradient1={"yellow-gradient-1"} imagename={"yellow"} title={"white"} />
                </NavHashLink>
              </div>
            </nav>
          ) : (
            <nav className="container-nav">
              <div className="nav-image">
                <NavHashLink to="/#top">
                  <Svg className={"pink"} imagegradient0={"black-gradient-0"} imagegradient1={"black-gradient-1"} imagename={"black"} title={"black"} />
                </NavHashLink>
              </div>
            </nav>
          )}
          <div className="nav-links">
            {isActive ? (
              <>
                <XHam
                  ClickHandle={() => {
                    setActive(!isActive);
                  }}
                />
              </>
            ) : (
              <Ham
                ClickHandle={() => {
                  setActive(!isActive);
                }}
              />
            )}
          </div>
        </div>
        <div className={fade}>
          {/* <div className='fadein'> */}
          <NavHashLink to="/#top" className="navfade">
            <Fade in={isActive} delay="500">
              Home
            </Fade>
          </NavHashLink>
          <NavHashLink to="/about#top" className="navfade">
            <Fade in={isActive} delay="700">
              About us
            </Fade>
          </NavHashLink>
          <NavHashLink to="/contact#top" className="navfade">
            <Fade in={isActive} delay="900">
              Contact Us
            </Fade>
          </NavHashLink>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
const TestNavbar = () => {
  const [isMobile, setMobile] = useState(window.matchMedia("(max-width:850px)").matches);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:850px)").matches);
    });
  });
  return <>{isMobile ? <TestMob /> : <TestDesk />}</>;
};

export default TestNavbar;
