import React from "react";
import "./Chat.css";

import MessageList from "./MessageList/MessageList";
import MessageForm from "./MessageForm/MessageForm";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: "",
      image: "",
      file: "",
      isMy: false
    };
  }

  updateData(id, text, image, file) {
    this.setState({
      id,
      text,
      image,
      file,
      isMy: true
    });
  }

  render() {
    return (
      <div className="chat">
        <MessageList
          id={this.state.id}
          text={this.state.text}
          image={this.state.image}
          file={this.state.file}
          isMy={this.state.isMy}
          updateData={this.updateData.bind(this)}
        />
        <MessageForm
          id={this.state.id}
          updateData={this.updateData.bind(this)}
        />
      </div>
    );
  }
}

export default Chat;
