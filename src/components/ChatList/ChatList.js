import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ChatList.css";

class ChatsList extends Component {
  render() {
    return (
      <div className="chat-list">
        <Link className="chat-list__chat" to="/chat/1">
          Chat1
        </Link>
        <Link className="chat-list__chat" to="/chat/2">
          Chat2
        </Link>
      </div>
    );
  }
}

export default ChatsList;
