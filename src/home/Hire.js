import React, { useState, useEffect, useRef } from "react";
import HireDesk from "../components/HireDesk";
import HireMob from "../components/HireMob";
import "./css/Hire.css";

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
    <><div className='hire'>
    {isDesktop ? (
      <>{isMobile ? <HireMob /> : <HireDesk />}</>
    ) : (
      <div className="largehire">{isMobile ? <HireMob /> : <HireDesk />}</div>
    )}
  </div></>
  );
};

export default Hire;
