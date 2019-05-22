import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

class ChatList extends React.PureComponent {
  render() {
    return (
      <div className={styles["chat-list"]}>
        <Link className={styles["chat-list__chat"]} to="/chat/1">
          Chat1
        </Link>
        <Link className={styles["chat-list__chat"]} to="/chat/2">
          Chat2
        </Link>
      </div>
    );
  }
}

export default ChatList;
