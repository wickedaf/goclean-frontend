import React, { useEffect } from 'react';
import lottie from "lottie-web/build/player/lottie_light";
import NotFoundLottie from './noMatch-lottie.json'
import HeaderNav from '../HeaderNav/HeaderNav';

const NoMatch = () => {
    useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#lottie-NotFound-container"),
          animationData: NotFoundLottie,
          
        });
      }, []);
    return (
        <div className="container">
            <HeaderNav></HeaderNav>
           <div className="w-50 mx-auto" id="lottie-NotFound-container"></div> 
        </div>
    );
};

export default NoMatch;