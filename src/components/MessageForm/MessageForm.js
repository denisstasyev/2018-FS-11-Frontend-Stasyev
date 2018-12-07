import React from "react";
import "./MessageForm.css";

import FileButton from "./FileButton/FileButton";
import TextMessageForm from "./TextMessageForm/TextMessageForm";
import SendButton from "./SendButton/SendButton";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  updateDataMessageForm(text) {
    this.setState({ text });
  }

  render() {
    return (
      <div className="message-form">
        <FileButton id={this.props.id} updateData={this.props.updateData} />

        <TextMessageForm
          text={this.state.text}
          ref="textMessageForm"
          updateDataMessageForm={this.updateDataMessageForm.bind(this)}
        />

        <SendButton
          id={this.props.id}
          text={this.state.text}
          textMessageForm={this.refs.textMessageForm}
          updateData={this.props.updateData}
          updateDataMessageForm={this.updateDataMessageForm.bind(this)}
        />
      </div>
    );
  }
}

export default MessageForm;
