import React from "react";
import styles from "./styles.module.css";

import { ExtrasButton } from "./ExtrasButton";
import { TextMessageForm } from "./TextMessageForm";
import { SendButton } from "./SendButton";

class MessageForm extends React.Component {
  render() {
    return (
      <div className={styles["message-form"]}>
        <ExtrasButton />
        <TextMessageForm />
        <SendButton />
      </div>
    );
  }
}

export default MessageForm;
