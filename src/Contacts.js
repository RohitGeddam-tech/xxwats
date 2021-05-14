import React from "react";
import "./App.css";
import Hire from "./home/Hire";
import Nav from "./components/TestNavbar";
// import { Helmet } from "react-helmet";
import HeadTag from "./HeadTag";

const View = () => {
  return (
    <>
      <HeadTag
        title="Contact Us- 20 Watts | Creative Solutions Agency"
        desc="We are a Creative Solutions Agency backed by an in-house production and post-production team in Mumbai. Contact us to build custom experiences for your brand"
      />
      <Nav />
      <section style={{ paddingTop: "65px", background: "#EEEA64" }}>
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
