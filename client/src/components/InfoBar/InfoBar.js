import React from "react";
import { Link } from "react-router-dom";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="room-heading">
    <div className="room-name">
      <div className="online-icon"></div>
      <h3>{room}</h3>
    </div>
    <div className="exit-room">
      <a href="/" style={{ textDecoration: "none" }}>
        <button className="close-button">EXIT</button>
      </a>
    </div>
  </div>
);

export default InfoBar;
