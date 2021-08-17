import React, { useEffect, useState, useRef, useCallback } from "react";
import "./css/Services.css";
import strategy from "../img/strat.webp";
import creative from "../img/create.webp";
import media from "../img/soc.webp";
import post from "../img/post.webp";
import production from "../img/prod.webp";
import Aos from "aos";
import "aos/dist/aos.css";

const Desktop = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const colorRef = useRef(null);

  const isInView = () => {
    const rect = window.pageYOffset;
    return rect >= 250 && rect <= 1200;
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

  const services = inView ? "services-white" : "services-heading";

  const para = inView ? "paragraphs" : "paragraph";

  const paraleft = inView ? "paragraphs-left" : "paragraph-left";

  return (
    <>
      <div ref={colorRef} className="desktop">
        <h1 className={services}>Services</h1>
        <div className="service-container">
          <div className="tabs">
            <div
              className="sentence"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="title">Strategy</h4>
              <p className={para}>
                Creating distinct brand identity in a saturated market. Our
                solutions are catered to your small and long term needs. With a
                clear cut, well-defined strategy, meet your set target goals
                and be amazed on why you didn’t contact us sooner.
              </p>
            </div>
            <div
              className="picture"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={strategy} alt="strategy.png" />
            </div>
          </div>
          <div className="tabs">
            <div
              className="picture"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={creative} alt="creative.png" />
            </div>
            <div
              className="sentence"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="title-left">Creative</h4>
              <p className={paraleft}>
                The trickier the problem, more creative the solution. We provide
                creative services across the spectrum- brand campaigns, social
                media campaigns, video campaigns, on-ground engagement and Web +
                UI.
              </p>
            </div>
          </div>
          <div className="tabs">
            <div
              className="sentence"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="title">Social media</h4>
              <p className="paragraph">
                Little known fact, the "S" in social media stands for strategy.
                We go a little beyond ‘posting fun content’ and help you in
                putting a strategy to the charade. The equation is simple. Your
                Social Media + Strategy + Well Executed Creatives + Great fonts
                = Mind Blown.
              </p>
            </div>
            <div
              className="picture"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={media} alt="social-media.png" />
            </div>
          </div>
          <div className="tabs">
            <div
              className="picture"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={production} alt="production.png" />
            </div>
            <div
              className="sentence"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="title-left">production</h4>
              <p className="paragraph-left">
                Our first leg, Production, has an in-house panel of diverse
                directors and a dedicated team of production crew who have been
                trained to go nights without sleeping and making miracles happen
                under a tight budget.
              </p>
            </div>
          </div>
          <div className="tabs">
            <div
              className="sentence"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="title">Post Production</h4>
              <p className="paragraph">
                Since you need two legs to walk into meetings with clients, our
                second leg, the in-house studio, which takes care of the
                aftermath - offline/online editing, motion graphics, color
                grading, sound design. We even throw in a game of counter
                strike, free of charge. Just kidding, we will charge you.
              </p>
            </div>
            <div
              className="picture"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={post} alt="post.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Mobile = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  });

  const colorRef = useRef(null);

  const isInView = () => {
    const rect = window.pageYOffset;
    return rect >= 250 && rect <= 1300;
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

  const services = inView ? "services-whitemob" : "services-headingmob";

  const para = inView ? "mob-paras" : "mob-para";

  return (
    <>
      <div ref={colorRef} className="mobile">
        <h1 className={services}>Services</h1>
        <div className="service-container">
          <div className="mobtabs">
            <div
              className="mob-pic"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={strategy} alt="strategy.png" />
            </div>
            <div
              className="mob-sentence"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="mob-title">Strategy</h4>
              <p className={para}>
                Creating distinct brand identity in a saturated market. Our
                solutions are catered to your small and long term needs. With a
                clear cut, well-defined strategy, meet your set target goals
                and be amazed on why you didn’t contact us sooner.
              </p>
            </div>
          </div>
          <div className="mobtabs">
            <div
              className="mob-pic"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={creative} alt="creative.png" />
            </div>
            <div
              className="mob-sentence"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="mob-title">creative</h4>
              <p className="mob-para">
                The trickier the problem, more creative the solution. We provide
                creative services across the spectrum- brand campaigns, social
                media campaigns, video campaigns, on-ground engagement and Web +
                UI.
              </p>
            </div>
          </div>
          <div className="mobtabs">
            <div
              className="mob-pic"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={media} alt="media.png" />
            </div>
            <div
              className="mob-sentence"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="mob-title">Social media</h4>
              <p className="mob-para">
                Little known fact, the "S" in social media stands for strategy.
                We go a little beyond ‘posting fun content’ and help you in
                putting a strategy to the charade. The equation is simple. Your
                Social Media + Strategy + Well Executed Creatives + Great fonts
                = Mind Blown.
              </p>
            </div>
          </div>
          <div className="mobtabs">
            <div
              className="mob-pic"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={production} alt="production.png" />
            </div>
            <div
              className="mob-sentence"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4 className="mob-title">Production</h4>
              <p className="mob-para">
                Our first leg, Production, has an in-house panel of diverse
                directors and a dedicated team of production crew who have been
                trained to go nights without sleeping and making miracles happen
                under a tight budget.
              </p>
            </div>
          </div>
          <div className="mobtabs">
            <div
              className="mob-pic"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={post} alt="post.png" />
            </div>
            <div
              className="mob-sentence"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="mob-title">post production</h4>
              <p className="mob-para">
                Since you need two legs to walk into meetings with clients, our
                second leg, the in-house studio, which takes care of the
                aftermath - offline/online editing, motion graphics, color
                grading, sound design. We even throw in a game of counter
                strike, free of charge. Just kidding, we will charge you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Services = () => {
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

  const services = inView ? "services-yell" : "services";
  // const largeservices = inView ? "largeservices-yell" : "largeservice";

  return (
    <div ref={colorRef} id="services" className={services}>
      {isDesktop ? (
        <>{isMobile ? <Mobile /> : <Desktop />}</>
      ) : (
        <div ref={colorRef} id="services" className={services}>
          <div className="largeabout-container">
            {isMobile ? <Mobile /> : <Desktop />}
          </div>
        </div>
      )}
    </div>
  );
};

const ServicesMob = () => {
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
    return rect >= 3700;
  };

  const scrollHandler = useCallback(() => {
    setInView(isInView());
  }, []);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  const services = inView ? "services-yell" : "services";

  return (
    <div ref={colorRef} id="services" className={services}>
      {isDesktop ? (
        <>{isMobile ? <Mobile /> : <Desktop />}</>
      ) : (
        <div ref={colorRef} id="services" className="largeservice">
          <div className="largeabout-container">
            {isMobile ? <Mobile /> : <Desktop />}
          </div>
        </div>
      )}
    </div>
  );
};

const ServicesAll = () => {
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
        <>{isMobile ? <ServicesMob /> : <Services />}</>
      ) : (
        <div className="largeservice">
          {isMobile ? <ServicesMob /> : <Services />}
        </div>
      )}
    </>
  );
};

export default ServicesAll;
