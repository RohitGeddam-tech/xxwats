import React, { useEffect } from "react";
import "./Middle.css";
import Aos from "aos";
import "aos/dist/aos.css";

// import icon from '../img/icons/icon-expand--before.svg'
// import icona from '../img/icons/icon-expand--after.svg'
import cyril from "../img/team/cyril.png";
import savio from "../img/team/savio.png";
// import arathi from "../img/team/arathi.png";
import ansh from "../img/team/ansh.png";
import anushree from "../img/team/anushree.png";
import saloni from "../img/team/saloni.png";
import reebu from "../img/team/Reebu.png";
import vaze from "../img/team/Vaze.png";
import anny from "../img/team/Anny.png";
import chris from "../img/team/Christopher.png";
import post from "../img/post.png";

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
          <h4 data-aos="fade-up" data-aos-duration="1000">
            Founders
          </h4>
          <div className="mobfirst">
            <img
              src={cyril}
              loading="lazy"
              alt="cyril"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <div data-aos="fade-up" data-aos-duration="2000">
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
              loading="lazy"
              alt="cyril"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <div data-aos="fade-up" data-aos-duration="2000">
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
          <h4 data-aos="fade-up" data-aos-duration="1000">
            Creative Team
          </h4>
          <div className="mobfirst">
            <img
              src={reebu}
              alt="reebu"
              loading="lazy"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <div data-aos="fade-up" data-aos-duration="2000">
              <h4>Reebu</h4>
              <p>
                Reebu is a content writer who writes scripts, copy, long text
                messages and subreddits about memes. She admits that the reason
                this paragraph came in two days late is because she was helping
                her friends make better movie choices. Another social cause she
                deeply cares about is bombarding her friends with random world
                news and world history facts. She'll happily answer all your
                questions as long as you don't ask her about her Google Search
                History, no one wants to find out if Pfizer was inspired by the
                word Pfaff or no.
              </p>
            </div>
          </div>
        </div>
        <div className="mobmid-container">
          <div className="mobfirst">
            <img
              src={ansh}
              alt="ansh"
              data-aos="fade-up"
              loading="lazy"
              data-aos-duration="1000"
            />
            <div data-aos="fade-up" data-aos-duration="2000">
              <h4>Ansh</h4>
              <p>We give him work. He does it. Great chap.</p>
            </div>
          </div>
        </div>
        <div className="mobmid-container">
          <div className="mobfirst">
            <img
              src={vaze}
              alt="vaze"
              data-aos="fade-up"
              loading="lazy"
              data-aos-duration="1000"
            />
            <div data-aos="fade-up" data-aos-duration="2000">
              <h4>Vaze</h4>
              <p>
                Growing up, V wanted to be an intergalactic charades champion.
                But once he found out that Intergalactic council doesn’t take
                vernacular guys in the championship, he gave up on the dream and
                started telling everyone that careers are a 21st century
                invention. Now he is a part time shutter-bug, part time
                paint-thumb and a full time story-teller. (Yes he will tell you
                one even if you aren’t interested). He hates the word Creative
                in any designation so they make sure to keep adding it next to
                his name. If you ever want to have a long, meaningless chats
                about meaning of life, do ping him. Just not on weekdays please,
                he will probably have those chats instead of working and WE ARE
                NOT OK WITH IT!
              </p>
            </div>
          </div>
        </div>
        <div className="mobmid-container">
          <div className="mobfirst">
            <img
              src={anny}
              alt="cyril"
              data-aos="fade-up"
              loading="lazy"
              data-aos-duration="1000"
            />
            <div data-aos="fade-up" data-aos-duration="2000">
              <h4>Anny</h4>
              <p>
                From writing in people's slam books in school, to
                conceptualising and executing brand campaigns, Anny has come a
                long way. After working with multiple agencies, she knows how to
                write for brands, content creators, influencers and even dating
                app bios, if required! Out of all her relationships, content
                writing has been the longest and most fulfilling one. P.S. When
                she's not panicking about work, she spends time trying
                observational comedy on stage.
              </p>
            </div>
          </div>
        </div>
        <div className="mobmid-container">
          <div className="mobfirst">
            <img
              src={chris}
              alt="cyril"
              data-aos="fade-up"
              loading="lazy"
              data-aos-duration="1000"
            />
            <div data-aos="fade-up" data-aos-duration="2000">
              <h4>Christopher</h4>
              <p>
                Christopher Baretto is a stand-up comedian and an author from
                Mumbai. He runs a satirical blog, a dedicated YouTube channel
                for stand-up sets and sketches and has authored two children's
                books.
              </p>
            </div>
          </div>
        </div>
        <div className="mobmid-container">
          <h4 data-aos="fade-up" data-aos-duration="1000">
            Business Team
          </h4>
          <div className="mobfirst">
            <img
              src={anushree}
              loading="lazy"
              alt="cyril"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <div data-aos="fade-up" data-aos-duration="2000">
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
              data-aos="fade-up"
              loading="lazy"
              data-aos-duration="1000"
            />
            <div data-aos="fade-up" data-aos-duration="2000">
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
        <div className="mobmid-container">
          <h4 data-aos="fade-up" data-aos-duration="1000">
            Production team
          </h4>
          <div className="mobnewfirst">
            <img
              src={post}
              loading="lazy"
              alt="cyril"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <div data-aos="fade-up" data-aos-duration="2000">
              <p>
                This is the real deal. The team that makes the dream a reality.
                A passionate group of highly skilled and driven people who
                constantly talk about giving their 110 percent but we remind
                them that their 100 percent would suffice. We have a team of 20+
                in the production department and an equally large team in the
                post production studio. All brilliant and all good at making
                what’s on paper, a reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidMob;
