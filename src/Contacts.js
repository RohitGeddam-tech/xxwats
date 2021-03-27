import React from "react";
import "./App.css";
import Hire from "./home/Hire";
import Nav from "./components/TestNavbar";
import AnimatedBg from "scroll-background/dist/AnimatedBg";
import { Transition } from "scroll-background";

const View = () => {
  return (
    <>
      <AnimatedBg>
      <Nav />
      <Transition from='#EEEA64' to='#EEEA64'>
      <section style={{ paddingTop: "65px" }}>
        <Hire />
      </section>
      </Transition>
      </AnimatedBg>
    </>
  );
};

const AboutPage = () => {
  return (
    <div className="App">
      <View />
    </div>
  );
};

export default AboutPage;
