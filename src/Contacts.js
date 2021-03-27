import React from "react";
import "./App.css";
import Hire from "./home/Hire";
import Nav from "./components/TestNavbar";

const View = () => {
  return (
    <>
      <Nav />
      <section style={{ paddingTop: "65px", background:'#EEEA64' }}>
        <Hire />
      </section>
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
