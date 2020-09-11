import React, { useContext } from "react";
import "./cabinetPage.css";

const CabinetPage = () => {
  return (
    <div>
      <div className="main">
        <img
          className="cabinet-image"
          src={require("../img/A0001.jpg")}
          alt="kitchen"
        ></img>
      </div>
      <div className='selection-container '>
                <div className="selection-card first">
      <img
          className="selection-image"
          src={require("../img/wood-dark.jpeg")}
          alt="kitchen"
        ></img>
        <p>Dark Wood</p>

      </div>
      <div className="selection-card">
      <img
          className="selection-image"
          src={require("../img/wood-dark.jpeg")}
          alt="kitchen"
        ></img>
        <p>Dark Wood</p>

      </div>
      <div className="selection-card">
      <img
          className="selection-image"
          src={require("../img/wood-dark.jpeg")}
          alt="kitchen"
        ></img>
        <p>Dark Wood</p>

      </div>
      <div className="selection-card">
      <img
          className="selection-image"
          src={require("../img/wood-dark.jpeg")}
          alt="kitchen"
        ></img>
        <p>Dark Wood</p>

      </div>
      <div className="selection-card">
      <img
          className="selection-image"
          src={require("../img/wood-dark.jpeg")}
          alt="kitchen"
        ></img>
        <p>Dark Wood</p>

      </div>
      <div className="selection-card">
      <img
          className="selection-image"
          src={require("../img/wood-dark.jpeg")}
          alt="kitchen"
        ></img>
        <p>Dark Wood</p>

      </div>
      <div className="selection-card">
      <img
          className="selection-image"
          src={require("../img/wood-dark.jpeg")}
          alt="kitchen"
        ></img>
        <p>Dark Wood</p>

      </div>
      </div>
    </div>
  );
};

export default CabinetPage;
