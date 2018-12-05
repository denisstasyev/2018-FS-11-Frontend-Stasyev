import React from "react";
import "./Message.css";

class Message extends React.Component {
  render() {
    if (this.props.isMy) {
      if (this.props.image !== "") {
        return (
          <div className="message my">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img className="message__my image-preview" src={this.props.image} />
          </div>
        );
      } else {
        return (
          <div className="message my">
            <div className="text-my">{this.props.text}</div>
          </div>
        );
      }
    } else {
      if (this.props.image !== "") {
        return (
          <div className="message alien">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              className="message__alien image-preview"
              src={this.props.image}
            />
          </div>
        );
      } else {
        return (
          <div className="message alien">
            <div className="text-alien">{this.props.text}</div>
          </div>
        );
      }
    }
  }
}

export default Message;
