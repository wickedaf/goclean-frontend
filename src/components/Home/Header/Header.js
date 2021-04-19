import React, { useEffect } from "react";
import lottie from "lottie-web/build/player/lottie_light";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.css";
import cleaningFloor from "./cleaning-floor-lottie.json";
import { Button } from "react-bootstrap";

const Header = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#lottie-cleaningFloor-container"),
      animationData: cleaningFloor,
      
    });
  }, []);
  return (
    <div className="header-container">
      <svg
        className="polygon-shape"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg>
      <HeaderNav></HeaderNav>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">
            Examples of great <br/> cleaning that get it right
            </h1>
            <p className="text-white lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis veniam molestias eum deserunt labore unde.
            </p>
            <Button className="px-4 py-2" variant="dark">
              <span className="p-0 lead">Learn more</span>
            </Button>
          </div>
          <div className="col-md-6" id="lottie-cleaningFloor-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
