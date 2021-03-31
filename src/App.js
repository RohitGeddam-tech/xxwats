import React, { useEffect, useRef, useState, Suspense } from "react";
import "./App.css";
import Nav from "./components/TestNav";
import Intro from "./home/Intro";
import Aos from "aos";
import "aos/dist/aos.css";

const About = React.lazy(() => import("./home/About"));

const Services = React.lazy(() => import("./home/Services"));

const Hire = React.lazy(() => import("./home/Hire"));

const View = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  // const colorRef = useRef(null);

  // const isInView = () => {
  //   const refColor = colorRef.current;
  //   const rect = refColor.getBoundingClientRect();
  //   return (
  //     (rect.top <= 100 || rect.top <= 300 || rect.top <= 500) &&
  //     (rect.bottom >= window.innerHeight - 100 ||
  //       rect.bottom >= window.innerHeight - 300 ||
  //       rect.bottom >= window.innerHeight - 500)
  //   );
  // };

  // console.log(window.innerHeight);

  // const [inView, setInView] = useState(false);


  // useEffect(() => {
  //   setInView(isInView());
  //   window.addEventListener("scroll", scrollHandler);
  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler);
  //   };
  // }, []);

  // const scrollHandler = () => {
  //   setInView(isInView());
  // };

  // const classColor = inView ? "about" : "about-none";

  return (
    <>
      <Suspense>
        <Nav />
          <Intro />
        <Suspense>
            <div className='about'>
              <About />
            </div>
        </Suspense>
        <Suspense>
              <Services />
        </Suspense>
        <Suspense>
              <Hire />
        </Suspense>
      </Suspense>
    </>
  );
};

const App = () => {
  // const newRef = useRef(null);

  // const isInView = () => {
  //   const refColor = newRef.current;
  //   const rect = refColor.getBoundingClientRect();
  //   return (
  //     rect.top <= -200
  //   );
  // };

  // console.log(window.innerHeight);

  // const [inView, setInView] = useState(false);

  // useEffect(() => {
  //   setInView(isInView());
  //   window.addEventListener("scroll", scrollHandler);
  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler);
  //   };
  // }, []);

  // const scrollHandler = () => {
  //   setInView(isInView());
  // };

  // const backColor = inView ? "Appcolor" : "App";

  return (
    <Suspense
        fallback={
          <div className="load-center">
            <div className="ui segment">
              <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
              </div>
              <p></p>
            </div>
          </div>
        }
      >
    <div className='App'>
      <View />
    </div>
    </Suspense>
  );
};

export default App;
