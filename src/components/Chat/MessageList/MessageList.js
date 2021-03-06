import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import { Message } from "./Message";

import * as actionTypes from "store/actionTypes/actionTypes";

class MessageList extends React.PureComponent {
  scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(this);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  handleDragAndDrop = event => {
    event.preventDefault();
    let files = Array.from(event.dataTransfer.files);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        this.props.handleFileSelect(file);
        this.props.onMessage([null, file]);
      };

      reader.readAsDataURL(file);
    }, this);
  };

  render() {
    return (
      <div
        className={styles["message-list"]}
        onDrop={this.handleDragAndDrop}
        onDragEnter={this.handleDragAndDrop}
        onDragOver={this.handleDragAndDrop}
        onDragLeave={this.handleDragAndDrop}
      >
        {this.props.messageList.map((message, idx) => {
          return (
            <Message
              key={idx}
              text={message.get("text")}
              file={message.get("file")}
              isMy={message.get("isMy")}
              time={message.get("time")}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messageList: state.messageListReducer.get("messageList")
});

const mapDispatchToProps = dispatch => ({
  handleFileSelect: file =>
    dispatch({
      type: actionTypes.SEND_FILE,
      file
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
