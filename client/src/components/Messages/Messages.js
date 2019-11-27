import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "../Message/Message";

import "./Messages.css";

const Messages = ({ messages }) => (
  <ScrollToBottom>
    {messages.map((message, i) => (
      <div key={`${message.text}${i}`}>
        <Message user={message.user} message={message.text} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
