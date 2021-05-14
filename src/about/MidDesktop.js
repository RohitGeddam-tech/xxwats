import React, { useState, useEffect } from "react";
import { Fade } from "react-animation-components";
import "./Middle.css";
import Aos from "aos";
import "aos/dist/aos.css";

import icon from "../img/icons/icon-expand--before.svg";
import icona from "../img/icons/icon-expand--after.svg";
import cyril from "../img/team/cyril.png";
import savio from "../img/team/savio.png";
import reebu from "../img/team/Reebu.png";
import vaze from "../img/team/Vaze.png";
import anny from "../img/team/Anny.png";
import chris from "../img/team/Christopher.png";
// import arathi from "../img/team/arathi.png";
import ansh from "../img/team/ansh.png";
import anushree from "../img/team/anushree.png";
import saloni from "../img/team/saloni.png";
import post from "../img/post.png";

const MidDesktop = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const [active, setActive] = useState(false);
  const [Saloni, setSaloni] = useState(false);
  const [Ansh, setAnsh] = useState(false);
  const [Arathi, setArathi] = useState(false);
  const [Savio, setSavio] = useState(false);
  const [Cyril, setCyril] = useState(false);
  const [Vaze, setVaze] = useState(false);
  const [Anny, setAnny] = useState(false);
  const [Chris, setChris] = useState(false);

  // const [afterActive, setAfterActive] = useState(true)

  const onCyrilClick = () => {
    setCyril(true);
    setSaloni(false);
    setSavio(false);
    setActive(false);
    setAnsh(false);
    setArathi(false);
    setVaze(false);
    setChris(false);
    setAnny(false);
  };

  const onSavioClick = () => {
    setCyril(false);
    setSaloni(false);
    setSavio(true);
    setActive(false);
    setAnsh(false);
    setArathi(false);
    setVaze(false);
    setChris(false);
    setAnny(false);
  };

  const onSaloniClick = () => {
    setCyril(false);
    setSaloni(true);
    setSavio(false);
    setActive(false);
    setAnsh(false);
    setArathi(false);
    setVaze(false);
    setChris(false);
    setAnny(false);
  };

  const onActiveClick = () => {
    setCyril(false);
    setSaloni(false);
    setSavio(false);
    setActive(true);
    setAnsh(false);
    setArathi(false);
    setVaze(false);
    setChris(false);
    setAnny(false);
  };

  const onAnshClick = () => {
    setCyril(false);
    setSaloni(false);
    setSavio(false);
    setActive(false);
    setAnsh(true);
    setArathi(false);
    setVaze(false);
    setChris(false);
    setAnny(false);
  };

  const onArathiClick = () => {
    setCyril(false);
    setSaloni(false);
    setSavio(false);
    setActive(false);
    setAnsh(false);
    setArathi(true);
    setVaze(false);
    setChris(false);
    setAnny(false);
  };

  const onVazeClick = () => {
    setCyril(false);
    setSaloni(false);
    setSavio(false);
    setActive(false);
    setAnsh(false);
    setArathi(false);
    setVaze(true);
    setChris(false);
    setAnny(false);
  };

  const onChrisClick = () => {
    setCyril(false);
    setSaloni(false);
    setSavio(false);
    setActive(false);
    setAnsh(false);
    setArathi(false);
    setVaze(false);
    setChris(true);
    setAnny(false);
  };

  const onAnnyClick = () => {
    setCyril(false);
    setSaloni(false);
    setSavio(false);
    setActive(false);
    setAnsh(false);
    setArathi(false);
    setVaze(false);
    setChris(false);
    setAnny(true);
  };

  const cls = active ? "cls" : "innerdiv";
  const box = active ? "box" : "cls";

  const salonibox = Saloni ? "rightbox" : "cls";
  const innersal = Saloni ? "cls" : "innerdiv";

  const anshBox = Ansh ? "rightbox" : "cls";
  const inneransh = Ansh ? "cls" : "innerdiv";

  const innerara = Arathi ? "cls" : "innerdiv";
  const araBox = Arathi ? "box" : "cls";

  const innercyril = Cyril ? "cls" : "innerdiv";
  const cyrilbox = Cyril ? "box" : "cls";

  const saviobox = Savio ? "rightbox" : "cls";
  const innersavio = Savio ? "cls" : "innerdiv";

  const vazebox = Vaze ? "cls" : "innerdiv";
  const innervaze = Vaze ? "box" : "cls";

  const chrisbox = Chris ? "rightbox" : "cls";
  const innerchrisbox = Chris ? "cls" : "innerdiv";

  const inneranny = Anny ? "cls" : "innerdiv";
  const annyBox = Anny ? "box" : "cls";

  return (
    <>
      <div className="Mid-container">
        <div className="mid-title">
          <h4 className="first-title">Meet the team</h4>
        </div>
        <div className="first-flexbox">
          <div
            className="mid-title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="flex-title">Founders</h4>
          </div>
          <div className="first-flex">
            <div
              className="inflex1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={innercyril} onMouseEnter={onCyrilClick}>
                <img loading="lazy" src={cyril} alt="logo" />
                <h4 className="flexbox-title">
                  cyril <img loading="lazy" src={icon} alt="logo" />
                </h4>
              </div>
              <Fade className={cyrilbox} in={Cyril} delay="100" duration="1000">
                <div
                  className="fadebox"
                  onMouseLeave={() => {
                    setCyril(false);
                  }}
                >
                  <p>
                    Cyril's spent the past 21 years establishing his credentials
                    in Management, Creative & Production. He has created branded
                    content for Radio, Television & Digital while working with
                    the likes of the TOI’s Entertainment unit, Red FM, Channel V
                    and more. His last stint with O4 Digital - Group M, led to
                    him breaking barriers on the digital platform. He has now
                    blended his content and production expertise with
                    technology, allowing him to be the creative firepower of 20
                    watts.
                  </p>
                  <h4 className="flexinbox-title">
                    Cyril <img loading="lazy" src={icona} alt="logo" />
                  </h4>
                </div>
              </Fade>
            </div>
            <div
              className="inflex2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={innersavio} onMouseEnter={onSavioClick}>
                <img loading="lazy" src={savio} alt="logo" />
                <h4 className="flexbox-title" onMouseEnter={onSavioClick}>
                  savio <img loading="lazy" src={icon} alt="logo" />
                </h4>
              </div>
              <Fade className={saviobox} in={Savio} delay="500" duration="1000">
                <div
                  className="fadebox"
                  onMouseLeave={() => {
                    setSavio(false);
                  }}
                >
                  <p>
                    Savio, an expert at his craft but a tech geek at heart with
                    over 20 years of experience in the media industry on the
                    technical as well as editorial front, starting with IN
                    Mumbai News Channel in 2001. He has worked with reputed
                    organisations like Sahara Networks and Network 18. With his
                    ventures Beanstalk Productions and Mad Hatter Media Pvt.
                    Ltd., he has consistently delivered quality services to all
                    major television networks and digital platforms.
                  </p>
                  <h4 className="flexinbox-title">
                    Savio <img loading="lazy" src={icona} alt="logo" />
                  </h4>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="first-flexbox">
          <div
            className="mid-title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="flex-title">Creative team</h4>
          </div>
          <div className="first-flex">
            <div
              className="inflex1"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className={innerara} onMouseEnter={onArathiClick}>
                <img loading="lazy" src={reebu} alt="logo" />
                <h4 className="flexbox-title">
                  Reebu <img loading="lazy" src={icon} alt="logo" />
                </h4>
              </div>
              <Fade className={araBox} in={Arathi} delay="500" duration="2000">
                <div
                  className="fadebox"
                  onMouseLeave={() => {
                    setArathi(false);
                  }}
                >
                  <p>
                    Reebu is a content writer who writes scripts, copy, long
                    text messages and subreddits about memes. She admits that
                    the reason this paragraph came in two days late is because
                    she was helping her friends make better movie choices.
                    Another social cause she deeply cares about is bombarding
                    her friends with random world news and world history facts.
                    She'll happily answer all your questions as long as you
                    don't ask her about her Google Search History, no one wants
                    to find out if Pfizer was inspired by the word Pfaff or no.
                  </p>
                  <h4 className="flexinbox-title">
                    Reebu <img loading="lazy" src={icona} alt="logo" />
                  </h4>
                </div>
              </Fade>
            </div>
            <div
              className="inflex2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={inneransh} onMouseEnter={onAnshClick}>
                <img loading="lazy" src={ansh} alt="logo" />
                <h4 className="flexbox-title">
                  Ansh <img loading="lazy" src={icon} alt="logo" />
                </h4>
              </div>
              <Fade className={anshBox} in={Ansh} delay="500" duration="1000">
                <div
                  className="fadebox"
                  onMouseLeave={() => {
                    setAnsh(false);
                  }}
                >
                  <p>We give him work. He does it. Great chap.</p>
                  <h4 className="flexinbox-title">
                    Ansh <img loading="lazy" src={icona} alt="logo" />
                  </h4>
                </div>
              </Fade>
            </div>
          </div>
          <div className="first-flex">
            <div
              className="inflex1"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className={inneranny} onMouseEnter={onAnnyClick}>
                <img loading="lazy" src={anny} alt="logo" />
                <h4 className="flexbox-title">
                  Anny <img loading="lazy" src={icon} alt="logo" />
                </h4>
              </div>
              <Fade className={annyBox} in={Anny} delay="500" duration="2000">
                <div
                  className="fadebox"
                  onMouseLeave={() => {
                    setAnny(false);
                  }}
                >
                  <p>
                    From writing in people's slam books in school, to
                    conceptualising and executing brand campaigns, Anny has come
                    a long way. After working with multiple agencies, she knows
                    how to write for brands, content creators, influencers and
                    even dating app bios, if required! Out of all her
                    relationships, content writing has been the longest and most
                    fulfilling one. P.S. When she's not panicking about work,
                    she spends time trying observational comedy on stage.
                  </p>
                  <h4 className="flexinbox-title">
                    Anny <img loading="lazy" src={icona} alt="logo" />
                  </h4>
                </div>
              </Fade>
            </div>
            <div
              className="inflex2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={vazebox} onMouseEnter={onVazeClick}>
                <img loading="lazy" src={vaze} alt="logo" />
                <h4 className="flexbox-title">
                  Aditya <img loading="lazy" src={icon} alt="logo" />
                </h4>
              </div>
              <Fade className={innervaze} in={vaze} delay="500" duration="1000">
                <div
                  className="fadenewbox"
                  onMouseLeave={() => {
                    setVaze(false);
                  }}
                >
                  <p>
                    Growing up, V wanted to be an intergalactic charades
                    champion. But once he found out that Intergalactic council
                    doesn’t take vernacular guys in the championship, he gave up
                    on the dream and started telling everyone that careers are a
                    21st century invention. Now he is a part time shutter-bug,
                    part time paint-thumb and a full time story-teller. (Yes he
                    will tell you one even if you aren’t interested). He hates
                    the word Creative in any designation so they make sure to
                    keep adding it next to his name. If you ever want to have a
                    long, meaningless chats about meaning of life, do ping him.
                    Just not on weekdays please, he will probably have those
                    chats instead of working and WE ARE NOT OK WITH IT!
                  </p>
                  <h4 className="flexinbox-title">
                    Aditya <img loading="lazy" src={icona} alt="logo" />
                  </h4>
                </div>
              </Fade>
            </div>
          </div>
          <div className="first-flex">
            <div
              className="inflex1"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className={innerchrisbox} onMouseEnter={onChrisClick}>
                <img loading="lazy" src={chris} alt="logo" />
                <h4 className="flexbox-title">
                  Christopher <img loading="lazy" src={icon} alt="logo" />
                </h4>
              </div>
              <Fade className={chrisbox} in={Chris} delay="500" duration="2000">
                <div
                  className="fadebox"
                  onMouseLeave={() => {
                    setChris(false);
                  }}
                >
                  <p>
                    Christopher Baretto is a stand-up comedian and an author
                    from Mumbai. He runs a satirical blog, a dedicated YouTube
                    channel for stand-up sets and sketches and has authored two
                    children's books.
                  </p>
                  <h4 className="flexinbox-title">
                    Christopher <img loading="lazy" src={icona} alt="logo" />
                  </h4>
                </div>
              </Fade>
            </div>
            <div
              className="inflex2"
              data-aos="fade-up"
              data-aos-duration="1000"
            ></div>
          </div>
        </div>
        <div className="first-flexbox">
          <div
            className="mid-title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="flex-title">Business team</h4>
          </div>
          <div className="first-flex">
            <div
              className="inflex1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={cls} onMouseEnter={onActiveClick}>
                <img loading="lazy" src={anushree} alt="logo" />
                <h4 className="flexbox-title">
                  Anushree <img loading="lazy" src={icon} alt="logo" />
                </h4>
              </div>
              <Fade className={box} in={active} delay="500" duration="1000">
                <div
                  className="fadebox"
                  onMouseLeave={() => {
                    setActive(false);
                  }}
                >
                  <p>
                    Latest addition to the 20 watts family, she handles
                    recruitments and business management and expansions. She
                    comes with 12+ years of experience in advertising and
                    production since she started working when she was 17 and
                    claims she hasn’t taken a sick day ever since. She has
                    worked with agencies like Ogilvy, Contract, Alok Nanda and
                    Company, Havas Creative, TBWA and more. She also experiments
                    with curly hair products, has the loudest laugh in the room
                    and loves to travel every chance she gets.
                  </p>
                  <h4 className="flexinbox-title">
                    Anushree <img loading="lazy" src={icona} alt="logo" />
                  </h4>
                </div>
              </Fade>
            </div>
            <div
              className="inflex2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={innersal} onMouseEnter={onSaloniClick}>
                <img loading="lazy" src={saloni} alt="logo" />
                <h4 className="flexbox-title">
                  saloni <img loading="lazy" src={icon} alt="logo" />
                </h4>
              </div>
              <Fade
                className={salonibox}
                in={Saloni}
                delay="500"
                duration="1000"
              >
                <div
                  className="fadebox"
                  onMouseLeave={() => {
                    setSaloni(false);
                  }}
                >
                  <p>
                    A veteran at 20 watts, Saloni Shah is a client's dream.
                    Every request is a yes and every 2am call answered, that's
                    how she paves her way into a client's heart. Her sweetness
                    is her strength and her weakness, and we don't say this
                    because she's a Gujrati. She can be found in the nearest
                    Starbucks conquering the world in her 6inch heels. Also, if
                    you know her, you've definitely asked her for the bomb
                    thepla recipe.
                  </p>
                  <h4 className="flexinbox-title">
                    Saloni <img loading="lazy" src={icona} alt="logo" />
                  </h4>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div
          className="midend-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4 className="flexend-title">Production team</h4>
          <div className="tabs">
            <div
              className="sentence"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="paragraph">
                This is the real deal. The team that makes the dream a reality.
                A passionate group of highly skilled and driven people who
                constantly talk about giving their 110 percent but we remind
                them that their 100 percent would suffice. We have a team of 20+
                in the production department and an equally large team in the
                post production studio. All brilliant and all good at making
                what’s on paper, a reality.
              </p>
            </div>
            <div
              className="picturenew"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img loading="lazy" src={post} alt="post" />
            </div>
          </div>
          {/* <p className="flexpara" data-aos="flip-up" data-aos-duration="3000">
            This is the real deal. The team that makes the dream a reality. A
            passionate group of highly skilled and driven people who constantly
            talk about giving their 110 percent but we remind them that their
            100 percent would suffice. We have a team of 20+ in the production
            department and an equally large team in the post production studio.
            All brilliant and all good at making what’s on paper, a reality.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default MidDesktop;
