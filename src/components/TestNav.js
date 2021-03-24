import React, { useState, useEffect } from "react";
import "./css/Nav.css";
import { Squash as Hamburger } from "hamburger-react";
import { NavHashLink } from "react-router-hash-link";
import Svg from "../components/Svg";

const TestDesk = () => {
  const [isActive, setActive] = useState(false);

  let colored = isActive ? "collapse-nav" : "nav";
  let header = isActive ? "headerfull" : "header";
  let fade = isActive ? "fade" : "dnone";
  let hamcolor = isActive ? "#fff" : "#202020";
  return (
    <>
      <div className={colored}>
        <div className={header}>
          {isActive ? (
            <nav className="container-fullnav">
              <div className="nav-image">
                <NavHashLink to="/xxwats#top">
                  <Svg
                    className={"white"}
                    imagegradient0={"yellow-gradient-0"}
                    imagegradient1={"yellow-gradient-1"}
                    imagename={"yellow"}
                    title={"white"}
                  />
                </NavHashLink>
              </div>
            </nav>
          ) : (
            <nav className="container-nav">
              <div className="nav-image">
                <NavHashLink to="/xxwats#top">
                  <Svg
                    className={"pink"}
                    imagegradient0={"yellow-gradient-0"}
                    imagegradient1={"yellow-gradient-1"}
                    imagename={"yellow"}
                    title={"black"}
                  />
                </NavHashLink>
              </div>
            </nav>
          )}
          <div className="nav-links">
            <Hamburger
              direction="left"
              className="ham"
              duration={0.4}
              color={hamcolor}
              toggled={isActive}
              toggle={setActive}
            />
          </div>
        </div>
        <div className={fade}>
          {/* <div className='fadein'> */}
          <NavHashLink to="/xxwats#top" className="navdeskfade">
            Home
          </NavHashLink>
          <NavHashLink to="/xxwats/about#top" className="navdeskfade">
            About us
          </NavHashLink>
          <NavHashLink to="/xxwats/contact#top" className="navdeskfade">
            Contact us
          </NavHashLink>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

const TestMob = () => {
  const [isActive, setActive] = useState(false);

  let colored = isActive ? "collapse-nav" : "nav";
  let header = isActive ? "headerfull" : "header";
  let fade = isActive ? "fade" : "dnone";
  let hamcolor = isActive ? "#fff" : "#202020";
  return (
    <>
      <div className={colored}>
        <div className={header}>
          {isActive ? (
            <nav className="container-fullnav">
              <div className="nav-image">
                <NavHashLink to="/xxwats#top">
                  <Svg
                    className={"white"}
                    imagegradient0={"yellow-gradient-0"}
                    imagegradient1={"yellow-gradient-1"}
                    imagename={"yellow"}
                    title={"white"}
                  />
                </NavHashLink>
              </div>
            </nav>
          ) : (
            <nav className="container-nav">
              <div className="nav-image">
                <NavHashLink to="/xxwats#top">
                  <Svg
                    className={"pink"}
                    imagegradient0={"yellow-gradient-0"}
                    imagegradient1={"yellow-gradient-1"}
                    imagename={"yellow"}
                    title={"black"}
                  />
                </NavHashLink>
              </div>
            </nav>
          )}
          <div className="nav-links">
            <Hamburger
              direction="left"
              className="ham"
              duration={0.4}
              color={hamcolor}
              toggled={isActive}
              toggle={setActive}
            />
          </div>
        </div>
        <div className={fade}>
          {/* <div className='fadein'> */}
          <NavHashLink to="/xxwats#top" className="navfade">
            Home
          </NavHashLink>
          <NavHashLink to="/xxwats/about#top" className="navfade">
            About us
          </NavHashLink>
          <NavHashLink to="/xxwats/contact#top" className="navfade">
            Contact us
          </NavHashLink>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

const TestNav = () => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:850px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:850px)").matches);
    });
  });
  return <>{isMobile ? <TestMob /> : <TestDesk />}</>;
};

export default TestNav;
