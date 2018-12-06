import React from "react";
import "./MessageList.css";

import Message from "./Message/Message";

import { getTime, getReadableSize, sendToServer } from "../Utils/Utils";

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
        isMy={false}
        key={-1}
      />
    );
  }

  onDragOver(event) {
    event.preventDefault();
    var text = "";
    var this_ptr = this;
    var files = event.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
      // eslint-disable-next-line no-loop-func
      (function(file) {
        var reader = new FileReader();
        reader.onload = function() {
          if (file.type.startsWith("image/")) {
            text = reader.result;
            this_ptr.props.updateData(this.props.id + 1, "", text);
          } else {
            text = `${file.name}, ${getReadableSize(file.size)}`;
            this_ptr.props.updateData(this.props.id + 1, text, "");
          }
        };
        reader.readAsDataURL(file);
        sendToServer(file, "");
      })(files[i]);
    }
  }

  render() {
    if (this.props.text !== "" || this.props.image !== "") {
      this.state.messages.push(
        <Message
          id={this.props.id}
          text={this.props.text}
          time={getTime()}
          image={this.props.image}
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
