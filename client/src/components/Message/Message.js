import React from "react";

import ReactEmoji from "react-emoji";

const Message = ({ user, message, name }) => {
  const trimmedName = name.trim().toLowerCase();

  const isSentByCurrentUser = user === trimmedName;
  const isSentByAdmin = user === "admin";

  const messageStyle = {
    alignSelf: isSentByCurrentUser ? "flex-end" : "flex-start",
    backgroundColor: isSentByCurrentUser
      ? "#74b9ff"
      : isSentByAdmin
      ? "#a4b0be"
      : "#7bed9f"
  };

  return (
    <div className="message" style={messageStyle}>
      <p className="user">{user}</p>
      <p className="message-text">{ReactEmoji.emojify(message)}</p>
    </div>
  );
};

export default Message;
