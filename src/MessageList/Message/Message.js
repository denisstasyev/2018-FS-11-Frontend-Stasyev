/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Message.css";

import { getReadableSize, getTime, sendToServer } from "../../Utils/Utils";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delivered: "not yet"
    };
  }

  sendAndUpdate(text, file) {
    if (this.state.delivered === "not yet") {
      this.setState({ delivered: "pending" });
      sendToServer(text, file).then(response => {
        if (response) {
          this.setState({ delivered: "true" });
        } else {
          this.setState({ delivered: "false" });
        }
      });
    }
  }

  render() {
    var text = "";
    var file = this.props.file;
    if (file) {
      this.sendAndUpdate("", file);
      if (this.props.image) {
        return (
          <div className={"message " + (this.props.isMy ? "my" : "alien")}>
            <img
              className={
                "message__" +
                (this.props.isMy ? "my" : "alien") +
                " image-preview"
              }
              src={this.props.image}
              alt="Sent image"
            />
            <div
              className={
                "time-and-state--" + (this.props.isMy ? "my" : "alien")
              }
            >
              {getTime().split(";")[0]}
            </div>
          </div>
        );
      } else {
        text = `${file.name}, ${file.type}, ${getReadableSize(file.size)}`;
      }
    } else {
      text = this.props.text;
      this.sendAndUpdate(text, "");
    }
    return (
      <div className={"message " + (this.props.isMy ? "my" : "alien")}>
        <div className={"text--" + (this.props.isMy ? "my" : "alien")}>
          {text}
        </div>
        <div
          className={"time-and-state--" + (this.props.isMy ? "my" : "alien")}
        >
          {getTime().split(";")[0]}
        </div>
      </div>
    );
  }
}

export default Message;
