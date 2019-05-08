import React from "react";
import "./MessageForm.css";

import ExtrasButton from "./ExtrasButton/ExtrasButton";
import ExtrasPanel from "./ExtrasPanel/ExtrasPanel";
// import FileButton from "./FileButton/FileButton";
import TextMessageForm from "./TextMessageForm/TextMessageForm";
import SendButton from "./SendButton/SendButton";

class MessageForm extends React.Component {
  render() {
    return (
      <div className="message-form">
        <ExtrasButton />
        <ExtrasPanel />
        <TextMessageForm />
        <SendButton />
      </div>
    );
  }
}

export default MessageForm;
