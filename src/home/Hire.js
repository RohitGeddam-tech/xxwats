import React, { useState, useEffect, useRef, useCallback } from "react";
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
    const rect = window.pageYOffset;
    return rect >= 2600;
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

  const hireColor = inView ? "hire" : "hireColor";

  return (
    <>
      <div ref={colorRef} className={hireColor}>
        {isDesktop ? (
          <>{isMobile ? <HireMob /> : <HireDesk />}</>
        ) : (
          <div className={hireColor} ref={colorRef}>
            <div className="largeabout-container">
              {isMobile ? <HireMob /> : <HireDesk />}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const ViewTab = () => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:780px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:780px)").matches);
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
    const rect = window.pageYOffset;
    return rect >= 2600;
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

  const hireColor = inView ? "hire" : "hireColor";

  return (
    <>
      <div ref={colorRef} className={hireColor}>
        {isDesktop ? (
          <>{isMobile ? <HireMob /> : <HireDesk />}</>
        ) : (
          <div className="largehire">
            {isMobile ? <HireMob /> : <HireDesk />}
          </div>
        )}
      </div>
    </>
  );
};

const ViewMob = () => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:780px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:780px)").matches);
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
    const rect = window.pageYOffset;
    return rect >= 3700;
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

  const hireColor = inView ? "hire" : "hireColor";

  return (
    <>
      <div ref={colorRef} className={hireColor}>
        {isDesktop ? (
          <>{isMobile ? <HireMob /> : <HireDesk />}</>
        ) : (
          <div className="largehire">
            {isMobile ? <HireMob /> : <HireDesk />}
          </div>
        )}
      </div>
    </>
  );
};

const Hire = () => {

  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:760px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:760px)").matches);
    });
  });


  const [isTab, setTab] = useState(
    window.matchMedia("(max-width:780px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTab(window.matchMedia("(max-width:780px)").matches);
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
    <div>
      {isDesktop ? (
        <>{isTab ? <>{isMobile ? <ViewMob /> : <ViewTab />}</> : <View />}</>
      ) : (
        <div className="largehire">{isMobile ? <ViewMob /> : <View />}</div>
      )}
    </div>
  );
};

export default Hire;
