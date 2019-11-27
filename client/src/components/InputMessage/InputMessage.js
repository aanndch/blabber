import React from "react";

const InputMessage = ({ message, sendMessage, setMessage }) => {
  return (
    <form onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default InputMessage;
