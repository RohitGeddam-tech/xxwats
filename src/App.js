import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/TestNav";
import Intro from "./home/Intro";
import About from "./home/About";
import Services from "./home/Services";
import Hire from "./home/Hire";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedBg from "scroll-background/dist/AnimatedBg";
import { Transition } from "scroll-background";

const View = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <Nav />
      <AnimatedBg>
        <Transition from='#fff' to='#fff'>
        <section>
        <Intro />
      </section>
      </Transition>
      <Transition from='#000' to='#000'>
      <section>
        <div>
          <About />
        </div>
      </section>
      </Transition>
      <Transition from='#fff' to='#fff'>
      <section>
        <div>
          <Services />
        </div>
      </section>
      </Transition>
      <Transition from='#EEEA64' to='#EEEA64'>
      <section>
        <div>
          <Hire />
        </div>
      </section>
      </Transition>
      </AnimatedBg>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <View />
    </div>
  );
};

export default App;
