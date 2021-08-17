import React, { useEffect, useState, lazy, Suspense } from "react";
import "./Middle.css";
// import Middesk from "./MidDesktop";
const Middesk = lazy(()=>import('./MidDesktop'))
// import MidMob from "./MidMob";
const MidMob = lazy(()=>import('./MidMob'))

const Middle = () => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:850px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:850px)").matches);
    });
  });

  const [isDesktop, setDesktop] = useState(
    window.matchMedia("(max-width:1400px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDesktop(window.matchMedia("(max-width:1400px)").matches);
    });
  });

  return (
    <Suspense fallback={<div></div>}>
      <div className="middle" id="mid">
      {isDesktop ? (
        <>{isMobile ? <MidMob /> : <Middesk />}</>
      ) : (
        <div className="largemiddle">
          <div className="largeabout-container">
            {isMobile ? <MidMob /> : <Middesk />}
          </div>
        </div>
      )}
    </div>
    </Suspense>
  );
};

export default Middle;
