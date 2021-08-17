import React, { useEffect, useRef, useState, useCallback } from "react";
import Hireabout from "./HireAbout";
import Nav from "../components/TestNav";
import FirstAbout from "./FirstAbout";
import Middle from "./Middle";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import HeadTag from "../HeadTag";

const View = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const colorRef = useRef(null);

  const isInView = () => {
    const rect = window.pageYOffset;
    return rect >= 150 && rect <= 3600;
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

  const aboutColor = inView ? "Aboutcolor" : "AboutPage";

  return (
    <div ref={colorRef} className={aboutColor}>
      <Nav />
      <section>
        <FirstAbout />
      </section>
      <section>
        <Middle />
      </section>
      <section>
        <Hireabout />
      </section>
    </div>
  );
};

const ViewMob = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const colorRef = useRef(null);

  const isInView = () => {
    const rect = window.pageYOffset;
    return rect >= 120 && rect <= 8750;
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

  const aboutColor = inView ? "Aboutcolor" : "AboutPage";

  return (
    <div ref={colorRef} className={aboutColor}>
      <Nav />
      <section>
        <FirstAbout />
      </section>
      <section>
        <Middle />
      </section>
      <section>
        <Hireabout />
      </section>
    </div>
  );
};

const AboutPage = () => {
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
      <HeadTag
        title="About Us- 20 Watts | Creative Solutions Agency"
        desc="With our expertise in Advertising and Production, we deliver 360° creative and markerting services and solutions."
      />
      {isDesktop ? (
        <>{isMobile ? <ViewMob /> : <View />}</>
      ) : (
        <>{isMobile ? <ViewMob /> : <View />}</>
      )}
    </>
  );
};

export default AboutPage;
