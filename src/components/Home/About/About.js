import React, { useEffect } from "react";
import lottie from "lottie-web/build/player/lottie_light";
import { Button } from "react-bootstrap";
import aboutUs from "./about-us-lottie.json";

const About = () => {
  useEffect(() => {
      
    lottie.loadAnimation({
      container: document.querySelector("#lottie-aboutUs-container"),
      animationData: aboutUs,
      loop: true, 
      autoplay: true
    });
  }, []);
  return (
    <section className="container my-5 py-5" id="about-us">
      <div className="row align-items-center">
        <div className="col-md-6">
          <p className="lead font-weight-bold m-0 p-0">About</p>
          <h1 className="font-weight-bold">
            Professional Cleaning Services company
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            mauris vitae egestas dolor consectetur. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vitae mauris vitae egestas dolor
            consectetur.
          </p>
          <Button
            className="px-5 py-2 lead font-weight-bold"
            variant="outline-primary"
          >
            <span className="p-0">Learn more</span>
          </Button>
        </div>
        <div className="col-md-6" id="lottie-aboutUs-container"></div>
      </div>
    </section>
  );
};

export default About;
