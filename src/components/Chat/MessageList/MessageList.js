import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import { Message } from "./Message";

import * as actionTypes from "store/actionTypes/actionTypes";

class MessageList extends React.Component {
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

    files.forEach(function(file) {
      let reader = new FileReader();
      reader.onload = function() {
        this.props.handleFileSelect(file);
        this.props.onMessage([null, file]);
      }.bind(this);

      reader.readAsDataURL(file);
    }, this);
  };

  render() {
    return (
      <div
        className={styles["message-list"]}
        onDrop={this.handleDragAndDrop.bind(this)}
        onDragEnter={this.handleDragAndDrop.bind(this)}
        onDragOver={this.handleDragAndDrop.bind(this)}
        onDragLeave={this.handleDragAndDrop.bind(this)}
      >
        {this.props.messageList.map((message, idx) => {
          return (
            <Message
              key={idx}
              text={message.text}
              file={message.file}
              isMy={message.isMy}
              time={message.time}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messageList: state.messageListReducer.messageList
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
