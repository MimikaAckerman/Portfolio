import React from "react";

import Style from "../assets/AllStyles/SocialMedia.module.css";
import { Back } from "../assets/allSvg";

const BtnBack = () => {
  return (
    <>
      <button target="_black" className={Style.back}>
        <a href="/" style={{ textDecoration: "none", color: "black" }}>
          <Back/>
        </a>
      </button>
    </>
  );
};

export default BtnBack;
