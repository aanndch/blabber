import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Lobby.css";

const Lobby = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const joinChat = e => {
    if (!name || !room) {
      e.preventDefault();
    }
  };

  return (
    <div className="container">
      <div className="join-creds">
        <h1>blabber</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Room"
          value={room}
          onChange={e => setRoom(e.target.value)}
          required
        />
        <Link to={`/chat?name=${name}&room=${room}`} onClick={e => joinChat(e)}>
          <button type="submit">JOIN!</button>
        </Link>
      </div>
    </div>
  );
};

export default Lobby;
