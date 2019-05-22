import React from "react";
import styles from "./styles.module.css";

import { ExtrasButton } from "./ExtrasButton";
import { TextMessageForm } from "./TextMessageForm";
import { SendButton } from "./SendButton";

class MessageForm extends React.PureComponent {
  render() {
    return (
      <div className={styles["message-form"]}>
        <ExtrasButton />
        <TextMessageForm onMessage={this.props.onMessage} />
        <SendButton onMessage={this.props.onMessage} />
      </div>
    );
  }
}

export default MessageForm;
