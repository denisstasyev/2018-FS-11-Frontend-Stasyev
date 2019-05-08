import React from "react";
import "./Chat.css";

import MessageList from "./MessageList/MessageList";
import MessageForm from "./MessageForm/MessageForm";

class Chat extends React.Component {
  render() {
    return (
      <div className="chat">
        <MessageList />
        <MessageForm />
      </div>
    );
  }
}

export default Chat;
