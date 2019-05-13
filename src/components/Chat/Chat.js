import React from "react";
import styles from "./styles.module.css";

import { MessageList } from "./MessageList";
import { ExtrasPanel } from "./ExtrasPanel";
import { MessageForm } from "./MessageForm";

class Chat extends React.Component {
  render() {
    return (
      <div className={styles["chat"]}>
        <MessageList />
        <ExtrasPanel />
        <MessageForm />
      </div>
    );
  }
}

export default Chat;
