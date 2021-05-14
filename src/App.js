import React, { useEffect, useRef, useState, useCallback } from "react";
import "./App.css";
import Nav from "./components/TestNav";
import Intro from "./home/Intro";
import About from "./home/About";
import Services from "./home/Services";
import Hire from "./home/Hire";

const View = () => {
  const colorRef = useRef(null);

  const isInView = () => {
    const rect = window.pageYOffset;
    return rect >= 410 && rect <= 1200;
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

  const cssColor = inView ? "Appcolor" : "App";

  const textColor = inView ? "white" : "black";

  return (
    <div className={cssColor}>
      <Nav />
      <Intro textColor={textColor} />
      <div ref={colorRef} className="about">
        <About />
      </div>
      <Services />
      <Hire />
    </div>
  );
};

const ViewMob = () => {
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

  const cssColor = inView ? "Appcolor" : "App";

  const textColor = inView ? "white" : "black";

  return (
    <div className={cssColor}>
      <Nav />
      <Intro textColor={textColor} />
      <div ref={colorRef} className="about">
        <About />
      </div>
      <Services />
      <Hire />
    </div>
  );
};

const App = () => {
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
        <>{isMobile ? <ViewMob /> : <View />}</>
      ) : (
        <>{isMobile ? <ViewMob /> : <View />}</>
      )}
    </>
  );
};

export default App;
