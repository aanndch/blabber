import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "../Message/Message";

const Messages = ({ name, messages }) => (
  <div className="messages-box">
    <ScrollToBottom>
      {messages.map((message, i) => (
        <React.Fragment key={`${message.text}${i}`}>
          <Message user={message.user} message={message.text} name={name} />
        </React.Fragment>
      ))}
    </ScrollToBottom>
  </div>
);

export default Messages;
