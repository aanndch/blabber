import React from "react";

import "./InputMessage.css";

const InputMessage = ({ message, sendMessage, setMessage }) => {
  return (
    <form onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Type a message"
        className="input-message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <input type="submit" value="Send" className="send-button" />
    </form>
  );
};

export default InputMessage;
