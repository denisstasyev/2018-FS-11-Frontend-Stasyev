import React from "react";
import { Link } from "react-router-dom";
import "./ChatList.css";

class ChatsList extends React.Component {
  render() {
    return (
      <ul className="chat-list">
        <li className="chat">
          <Link to="/chat1">Chat1</Link>
        </li>
        <li className="chat">
          <Link to="/chat2">Chat2</Link>
        </li>
      </ul>
    );
  }
}

export default ChatsList;
