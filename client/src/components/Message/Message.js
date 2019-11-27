import React from "react";

const Message = ({ user, message }) => (
  <div>
    <p>{user}</p>
    <p>{message}</p>
  </div>
);

export default Message;
