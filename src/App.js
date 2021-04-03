import React, { useEffect, useRef, useState, Suspense } from "react";
import "./App.css";
import Nav from "./components/TestNav";
import Intro from "./home/Intro";

const About = React.lazy(() => import("./home/About"));

const Services = React.lazy(() => import("./home/Services"));

const Hire = React.lazy(() => import("./home/Hire"));

const View = () => {

  const colorRef = useRef(null);

  const isInView = () => {
    const refColor = colorRef.current;
    const rect = window.pageYOffset;
    return (
      (rect >= 250 && rect <= 1000)
    );
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
  
  const cssColor = (inView ? 'Appcolor' : 'App') 

  const textColor = inView ? 'white' : 'black'


  return (
    <div className={cssColor}>
      <Suspense>
        <Nav />
        <Intro textColor={textColor} />
          <div ref={colorRef} className="about">
            <About />
          </div>
          <Services />
          <Hire />
      </Suspense>
    </div>
  );
};

const ViewMob = () => {

  const colorRef = useRef(null);

  const isInView = () => {
    const refColor = colorRef.current;
    const rect = window.pageYOffset;
    return (
      (rect >= 150 && rect <= 1300)
    );
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
  
  const cssColor = (inView ? 'Appcolor' : 'App') 

  const textColor = inView ? 'white' : 'black'


  return (
    <div className={cssColor}>
      <Suspense>
        <Nav />
        <Intro textColor={textColor} />
          <div ref={colorRef} className="about">
            <About />
          </div>
          <Services />
          <Hire />
      </Suspense>
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
    <Suspense
      fallback={
        <div className="load-center">
          <div className="ui segment">
            <div className="ui active inverted dimmer">
              <div className="ui text loader">Loading</div>
            </div>
            <p></p>
          </div>
        </div>
      }
    >
      {isDesktop ? (
        <>{isMobile ? <ViewMob /> : <View />}</>
      ) : (
        <>
          {isMobile ? (
            <ViewMob />
          ) : (
            <View />
          )}
        </>
      )}
    </Suspense>
  );
};

export default App;
