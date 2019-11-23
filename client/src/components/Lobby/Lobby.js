import React, { useState } from "react";
import { Link } from "react-router-dom";

const Lobby = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const joinChat = e => {
    if (!name || !room) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room"
        value={room}
        onChange={e => setRoom(e.target.value)}
      />
      <Link to={`/chat?name=${name}&room=${room}`} onClick={e => joinChat(e)}>
        <button type="submit">Join room!</button>
      </Link>
    </div>
  );
};

export default Lobby;
