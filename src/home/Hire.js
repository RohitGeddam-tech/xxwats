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

  const colorRef = useRef(null);

  const isInView = () => {
    const refColor = colorRef.current;
    const rect = refColor.getBoundingClientRect();
    return (
      (rect.top <= 100 || rect.top <= 300 || rect.top <= 500) &&
      (rect.bottom <= 0 ||
        rect.bottom >= window.innerHeight ||
        rect.bottom >= window.innerHeight - 100 ||
        rect.bottom >= window.innerHeight - 300 ||
        rect.bottom >= window.innerHeight - 500)
    );
  };

  console.log(window.innerHeight);

  const [serView, setserView] = useState(false);

  useEffect(() => {
    setserView(isInView())
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setserView(isInView());
  };

  const hireColor = serView ? 'hire' : 'hire-none'

  return (
    <><div className={hireColor} ref={colorRef}>
    {isDesktop ? (
      <>{isMobile ? <HireMob /> : <HireDesk />}</>
    ) : (
      <div className="largehire">{isMobile ? <HireMob /> : <HireDesk />}</div>
    )}
  </div></>
  );
};

export default Hire;
