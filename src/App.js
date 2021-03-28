import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/TestNav";
import Intro from "./home/Intro";
import About from "./home/About";
import Services from "./home/Services";
import Hire from "./home/Hire";
import Aos from "aos";
import "aos/dist/aos.css";

const View = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <Nav />
        <section>
        <Intro />
      </section>
      <section>
        <div>
          <About />
        </div>
      </section>
      <section>
        <div>
          <Services />
        </div>
      </section>
      <section>
        <div>
          <Hire />
        </div>
      </section>
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
