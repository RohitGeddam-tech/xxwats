import React, { useEffect, useRef, useState, Suspense } from "react";
import "./App.css";
import Nav from "./components/TestNav";
import Intro from "./home/Intro";

const About = React.lazy(() => import("./home/About"));

const Services = React.lazy(() => import("./home/Services"));

const Hire = React.lazy(() => import("./home/Hire"));

const View = () => {

  const [serView, setserView] = useState(false);

  const cssColor = serView ? 'Appcolor' : 'App'

  return (
    <div className={cssColor}>
      <Suspense>
        <Nav />
        <Intro />
          <div className="about">
            <About />
          </div>
          <Services />
          <Hire />
      </Suspense>
    </div>
  );
};

const App = () => {
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
      <View>
        <View />
      </View>
    </Suspense>
  );
};

export default App;
