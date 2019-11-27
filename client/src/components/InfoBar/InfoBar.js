import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div>
    <div>
      {/* Online Icon */}
      <h3>{room}</h3>
    </div>
    <div>
      <a href="/">{/* CLose Icon */}</a>
    </div>
  </div>
);

export default InfoBar;
