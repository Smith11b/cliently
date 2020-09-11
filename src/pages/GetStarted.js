import React, { useContext } from "react";
import SelectionContext from "../context/selection";
import "./getStarted.css";

const GetStartedPage = () => {
  const { selectedState, setSelectedState } = useContext(SelectionContext);

  return (
    <div>
      <div className="left-main">
        <p className="main-header">DESIGN YOUR DREAM KITCHEN ONLINE</p>
        <a href="/cabinet" className="main-button">
          START HERE
        </a>
        <div className="subtext-container">
          <p className="subtext">
            An easy, quick, and convenient way to figure out what looks great in
            your kitchen. Choose from different floors, cabinet materials, and
            countertops to create the kitchen you always wanted.
          </p>
        </div>
      </div>
      <div className="right-main">
        <img
          className="hero-image"
          src={require("../img/A0001.jpg")}
          alt="kitchen"
        ></img>
      </div>
    </div>
  );
};

export default GetStartedPage;
