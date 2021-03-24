import React, { useEffect } from "react";
import "./Middle.css";
import Aos from "aos";
import "aos/dist/aos.css";

// import icon from '../img/icons/icon-expand--before.svg'
// import icona from '../img/icons/icon-expand--after.svg'
import cyril from "../img/team/cyril.png";
import savio from "../img/team/savio.png";
import arathi from "../img/team/arathi.png";
import ansh from "../img/team/ansh.png";
import anushree from "../img/team/anushree.png";
import saloni from "../img/team/saloni.png";

const MidMob = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <>
      <div className="mobbox">
        <div className="titlemid-container">
          <h4 className="first-title">Meet the team</h4>
        </div>
        <div className="mobmid-container">
          <h4>Founders</h4>
          <div className="mobfirst">
            <img
              src={cyril}
              alt="cyril"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <div data-aos="flip-down" data-aos-duration="3000">
              <h4>Cyril</h4>
              <p>
                Cyril's spent the past 21 years establishing his credentials in
                Management, Creative & Production. He has created branded
                content for Radio, Television & Digital while working with the
                likes of the TOI’s Entertainment unit, Red FM, Channel V and
                more. His last stint with O4 Digital - Group M, led to him
                breaking barriers on the digital platform. He has now blended
                his content and production expertise with technology, allowing
                him to be the creative firepower of 20 watts.
              </p>
            </div>
          </div>
        </div>
        <div className="mobmid-container">
          <div className="mobfirst">
            <img
              src={savio}
              alt="cyril"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <div data-aos="flip-down" data-aos-duration="3000">
              <h4>Savio</h4>
              <p>
                Savio, an expert at his craft but a tech geek at heart with over
                20 years of experience in the media industry on the technical as
                well as editorial front, starting with IN Mumbai News Channel in
                2001. He has worked with reputed organisations like Sahara
                Networks and Network 18. With his ventures Beanstalk Productions
                and Mad Hatter Media Pvt. Ltd., he has consistently delivered
                quality services to all major television networks and digital
                platforms.
              </p>
            </div>
          </div>
        </div>
        <div className="mobmid-container">
          <h4>Creative Team</h4>
          <div className="mobfirst">
            <img
              src={arathi}
              alt="cyril"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <div data-aos="flip-down" data-aos-duration="3000">
              <h4>Arathi</h4>
              <p>
                She Started with Channel [v], attended New York Film Academy to
                study Producing for Film & TV and then pulled a ‘Swades’ on
                everybody. She returned to her motherland to create cool content
                for digital mediums. If there was an award for ‘Shining
                Personalities’, Arathi would surely be the runner up. But if we
                are really being honest about her, she is a creative powerhouse
                and nothing short of a goofy rockstar!
              </p>
            </div>
          </div>
        </div>
        <div className="mobmid-container">
          <div className="mobfirst">
            <img
              src={ansh}
              alt="cyril"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <div data-aos="flip-down" data-aos-duration="3000">
              <h4>Ansh</h4>
              <p>We give him work. He does it. Great chap.</p>
            </div>
          </div>
        </div>
        <div className="mobmid-container">
          <h4>Business Team</h4>
          <div className="mobfirst">
            <img
              src={anushree}
              alt="cyril"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <div data-aos="flip-down" data-aos-duration="3000">
              <h4>Anushree</h4>
              <p>
                Latest addition to the 20 watts family, she handles recruitments
                and business management and expansions. She comes with 12+ years
                of experience in advertising and production since she started
                working when she was 17 and claims she hasn’t taken a sick day
                ever since. She has worked with agencies like Ogilvy, Contract,
                Alok Nanda and Company, Havas Creative, TBWA and more. She also
                experiments with curly hair products, has the loudest laugh in
                the room and loves to travel every chance she gets.
              </p>
            </div>
          </div>
        </div>
        <div className="mobmid-container">
          <div className="mobfirst">
            <img
              src={saloni}
              alt="cyril"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <div data-aos="flip-down" data-aos-duration="3000">
              <h4>Saloni</h4>
              <p>
                A veteran at 20 watts, Saloni Shah is a client's dream. Every
                request is a yes and every 2am call answered, that's how she
                paves her way into a client's heart. Her sweetness is her
                strength and her weakness, and we don't say this because she's a
                Gujrati. She can be found in the nearest Starbucks conquering
                the world in her 6inch heels. Also, if you know her, you've
                definitely asked her for the bomb thepla recipe.
              </p>
            </div>
          </div>
        </div>
        <div
          className="mobmid-container"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h4>Production team</h4>
          <div
            className="mobfirst"
            data-aos="flip-down"
            data-aos-duration="3000"
          >
            <p>
              This is the real deal. The team that makes the dream a reality. A
              passionate group of highly skilled and driven people who
              constantly talk about giving their 110 percent but we remind them
              that their 100 percent would suffice. We have a team of 20+ in the
              production department and an equally large team in the post
              production studio. All brilliant and all good at making what’s on
              paper, a reality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidMob;
