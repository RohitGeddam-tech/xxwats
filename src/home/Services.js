import React, { useEffect, useState } from "react";
import "./css/Services.css";
import strategy from "../img/services/strategy.png";
import creative from "../img/services/Creative1.svg";
import media from "../img/services/social-media.png";
import post from "../img/services/post-production.png";
import production from "../img/services/production.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Desktop = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  });

  return (
    <>
      <div className="desktop">
        <h1 className="services-heading">Services</h1>
        <div className="service-container">
          <div className="tabs">
            <div
              className="sentence"
              data-aos="fade-right"
              data-aos-duration="2900"
            >
              <h4 className="title">Strategy</h4>
              <p className="paragraph">
                Creating distinct brand identity in a saturated market. Our
                solutions are catered to your small and long term needs. With a
                clear cut, well-defined strategy , meet your set target goals
                and be amazed on why you didn’t contact us sooner.
              </p>
            </div>
            <div
              className="picture"
              data-aos="fade-left"
              data-aos-duration="2900"
            >
              <img src={strategy} alt="strategy.png" />
            </div>
          </div>
          <div className="tabs">
            <div
              className="picture"
              data-aos="fade-right"
              data-aos-duration="2900"
            >
              <img src={creative} alt="creative.png" />
            </div>
            <div
              className="sentence"
              data-aos="fade-left"
              data-aos-duration="2900"
            >
              <h4 className="title-left">Creative</h4>
              <p className="paragraph-left">
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
              data-aos="fade-right"
              data-aos-duration="2900"
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
              data-aos="fade-left"
              data-aos-duration="2900"
            >
              <img src={media} alt="social-media.png" />
            </div>
          </div>
          <div className="tabs">
            <div
              className="picture"
              data-aos="fade-right"
              data-aos-duration="2900"
            >
              <img src={production} alt="production.png" />
            </div>
            <div
              className="sentence"
              data-aos="fade-left"
              data-aos-duration="2900"
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
              data-aos="fade-right"
              data-aos-duration="2900"
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
              data-aos="fade-left"
              data-aos-duration="2900"
            >
              <img src={post} alt="post.png" />
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

  return (
    <>
      <div className="desktop">
        <h1 className="services-headingmob">Services</h1>
        <div className="service-container">
          <div className="mobtabs">
            <div
              className="mob-pic"
              data-aos="fade-left"
              data-aos-duration="2900"
            >
              <img src={strategy} alt="strategy.png" />
            </div>
            <div
              className="mob-sentence"
              data-aos="fade-right"
              data-aos-duration="2900"
            >
              <h4 className="mob-title">Strategy</h4>
              <p className="mob-para">
                Creating distinct brand identity in a saturated market. Our
                solutions are catered to your small and long term needs. With a
                clear cut, well-defined strategy , meet your set target goals
                and be amazed on why you didn’t contact us sooner.
              </p>
            </div>
          </div>
          <div className="mobtabs">
            <div
              className="mob-pic"
              data-aos="fade-left"
              data-aos-duration="2900"
            >
              <img src={creative} alt="creative.png" />
            </div>
            <div
              className="mob-sentence"
              data-aos="fade-right"
              data-aos-duration="2900"
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
              data-aos="fade-left"
              data-aos-duration="2900"
            >
              <img src={media} alt="media.png" />
            </div>
            <div
              className="mob-sentence"
              data-aos="fade-right"
              data-aos-duration="2900"
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
              data-aos="fade-left"
              data-aos-duration="2900"
            >
              <img src={production} alt="production.png" />
            </div>
            <div
              className="mob-sentence"
              data-aos="fade-right"
              data-aos-duration="2900"
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
              data-aos="fade-left"
              data-aos-duration="2900"
            >
              <img src={post} alt="post.png" />
            </div>
            <div
              className="mob-sentence"
              data-aos="fade-right"
              data-aos-duration="2900"
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

  return (
    <div className="services" id="services">
      {isDesktop ? (
        <>{isMobile ? <Mobile /> : <Desktop />}</>
      ) : (
        <div className="largeservice">
          {isMobile ? <Mobile /> : <Desktop />}
        </div>
      )}
    </div>
  );
};

export default Services;
