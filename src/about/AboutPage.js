import React, { useEffect, useRef, useState } from "react";
import Hireabout from "./HireAbout";
import Nav from "../components/TestNav";
import FirstAbout from "./FirstAbout";
import Middle from "./Middle";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const View = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const colorRef = useRef(null);

  const isInView = () => {
    const refColor = colorRef.current;
    const rect = window.pageYOffset;
    return (
      (rect >= 150 && rect <= 2100)
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
    console.log('ref height',colorRef.current.offsetHeight);
    setInView(isInView());
  };
  
  const aboutColor = (inView ? 'Aboutcolor' : 'AboutPage') 

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
    const refColor = colorRef.current;
    const rect = window.pageYOffset;
    return (
      (rect >= 120 && rect <= 4500)
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
    console.log('ref height',colorRef.current.offsetHeight);
    setInView(isInView());
  };
  
  const aboutColor = (inView ? 'Aboutcolor' : 'AboutPage') 

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
    </>
  );
};

export default AboutPage;
