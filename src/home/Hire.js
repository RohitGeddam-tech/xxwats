import React, { useState, useEffect, useRef } from "react";
import HireDesk from "../components/HireDesk";
import HireMob from "../components/HireMob";
import "./css/Hire.css";

const View = () => {
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
    const rect = window.pageYOffset;
    return (
      (rect >= 2400)
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

  const hireColor = inView ? 'hire' : 'hireColor'

  return (
    <><div ref={colorRef} className={hireColor}>
    {isDesktop ? (
      <>{isMobile ? <HireMob /> : <HireDesk />}</>
    ) : (
      <div className="largehire">{isMobile ? <HireMob /> : <HireDesk />}</div>
    )}
  </div></>
  );
}

const ViewMob = () => {
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
    const rect = window.pageYOffset;
    return (
      (rect >= 3500)
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

  const hireColor = inView ? 'hire' : 'hireColor'


  return (
    <><div ref={colorRef} className={hireColor}>
    {isDesktop ? (
      <>{isMobile ? <HireMob /> : <HireDesk />}</>
    ) : (
      <div className="largehire">{isMobile ? <HireMob /> : <HireDesk />}</div>
    )}
  </div></>
  );
}

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
    <>
    {isDesktop ? (
      <>{isMobile ? <ViewMob /> : <View />}</>
    ) : (
      <div className="largehire">{isMobile ? <ViewMob /> : <View />}</div>
    )}
  </>
  );
};

export default Hire;
