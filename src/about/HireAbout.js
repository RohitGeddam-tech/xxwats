import React, { useState, useEffect } from "react";
import AboutDesk from "../components/AboutDesk";
import AboutMob from "../components/AboutMob";
import "../home/css/Hire.css";

const Hire = () => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:760px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:760px)").matches);
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
    <div className="hireabout">
      {isDesktop ? (
        <>{isMobile ? <AboutMob /> : <AboutDesk />}</>
      ) : (
        <div className="largehireabout">
        <div className='largeabout-container'>
          {isMobile ? <AboutMob /> : <AboutDesk />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hire;
