import React, { useState } from "react";
import "./css/hamburger.css";

const Hamburger = ({ClickHandle}) => {
  return (
    <>
      <div class="menu-btn" onClick={ClickHandle}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </>
  );
};

export default Hamburger;
