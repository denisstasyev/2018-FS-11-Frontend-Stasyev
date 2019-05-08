import React from "react";
import { connect } from "react-redux";
import "./MessageList.css";

import Message from "./Message/Message";

import * as actionTypes from "../../../store/actionTypes/actionTypes";

class MessageList extends React.Component {
  handleDragAndDrop(event) {
    event.preventDefault();
    var files = Array.from(event.dataTransfer.files);

    files.forEach(function(file) {
      var reader = new FileReader();
      reader.onload = function() {
        this.props.handleFileSelect(file);
      }.bind(this);

      reader.readAsDataURL(file);
    }, this);
  }

  render() {
    return (
      <div
        // id="message-list"
        className="message-list"
        onDrop={this.handleDragAndDrop.bind(this)}
        onDragEnter={this.handleDragAndDrop.bind(this)}
        onDragOver={this.handleDragAndDrop.bind(this)}
        onDragLeave={this.handleDragAndDrop.bind(this)}
      >
        {this.props.messageList.map(message => {
          return (
            <Message
              // id={"message-" + message.id}
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

const mapStateToProps = state => {
  return {
    messageList: state.messageListReducer.messageList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFileSelect: file =>
      dispatch({
        type: actionTypes.SEND_FILE,
        file
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
