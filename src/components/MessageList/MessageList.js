import React from "react";
import "./MessageList.css";

import Message from "./Message/Message";

import { getTime } from "../../utils/utils";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    // Test data
    this.state.messages.push(
      <Message
        id={-2}
        text="Кто лучший ментор?"
        time={getTime()}
        image=""
        file=""
        isMy={true}
        key={-2}
      />
    );
    this.state.messages.push(
      <Message
        id={-1}
        text="Мартин!"
        time={getTime()}
        image=""
        file=""
        isMy={false}
        key={-1}
      />
    );
  }

  onDragOver(event) {
    event.preventDefault();
    var files = Array.from(event.dataTransfer.files);

    files.forEach(function(file) {
      var reader = new FileReader();
      reader.onload = function() {
        if (file.type.startsWith("image/")) {
          this.props.updateData(this.props.id + 1, "", reader.result, file);
        } else {
          this.props.updateData(this.props.id + 1, "", "", file);
        }
      }.bind(this);

      reader.readAsDataURL(file);
    }, this);
  }

  render() {
    if (this.props.text || this.props.img || this.props.file) {
      this.state.messages.push(
        <Message
          id={this.props.id}
          text={this.props.text}
          time={getTime()}
          image={this.props.image}
          file={this.props.file}
          isMy={this.props.isMy}
          key={this.props.id}
        />
      );
    }
    return (
      <div
        className="message-list"
        onDrop={this.onDragOver.bind(this)}
        onDragEnter={this.onDragOver.bind(this)}
        onDragOver={this.onDragOver.bind(this)}
        onDragLeave={this.onDragOver.bind(this)}
      >
        {this.state.messages}
      </div>
    );
  }
}

export default MessageList;
