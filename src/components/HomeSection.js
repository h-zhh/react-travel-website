import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HomeSection.css";
import vid from "../videos/video-1.mp4";

function HomeSection() {
  return (
    <div className="home-container">
      <video src={vid} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="home-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HomeSection;
