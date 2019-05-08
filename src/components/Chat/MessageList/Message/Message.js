/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Message.css";
// import "../../ReactionTypes/ReactionTypes.css";

import { getReadableSize, sendToServer } from "../../../../utils/utils";

import reactionTypeList from "../../ReactionTypes";

const imagePattern = /^image\.*/;

class Message extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     delivered: "not yet"
  //   };
  // }

  // sendAndUpdate(text, file) {
  //   if (this.state.delivered === "not yet") {
  //     this.setState({ delivered: "pending" });
  //     sendToServer(text, file).then(response => {
  //       if (response) {
  //         this.setState({ delivered: "true" });
  //       } else {
  //         this.setState({ delivered: "false" });
  //       }
  //     });
  //   }
  // }

  preventXSSAttack(text) {
    //TODO: FIX XSS ATTACK!
    return text;
  }

  handleReaction(text) {
    let result = text;
    reactionTypeList.forEach(reaction => {
      var src = require("../../../../static/Chat/MessageForm/Reactions/" +
        reaction.name +
        ".png?sprite");
      if (text === reaction.text) {
        result =
          '<img src="' +
          src +
          '" style="max-width:100%;" alt="Reaction template" />'.replace(
            "template",
            reaction.name
          );
      }
      while (result.indexOf(reaction.text) !== -1) {
        result = result.replace(
          reaction.text,
          '<img src="' +
            src +
            '" style="height: 1em; width: 1em" alt="Reaction template" />'.replace(
              "template",
              reaction.name
            )
        );
      }
    });
    result = this.preventXSSAttack(result);
    return { __html: result };
  }

  render() {
    if (this.props.file) {
      // this.sendAndUpdate("", file);
      if (this.props.file.type.match(imagePattern)) {
        return (
          <div className={"message " + (this.props.isMy ? "my" : "alien")}>
            <img
              className={
                "message__" +
                (this.props.isMy ? "my" : "alien") +
                " image-preview"
              }
              src={URL.createObjectURL(this.props.file)}
              alt="Sent image"
            />
            <div className="extras">
              <div
                className={
                  "time-and-state--" + (this.props.isMy ? "my" : "alien")
                }
              >
                {this.props.time}
              </div>
              <div className={"size--" + (this.props.isMy ? "my" : "alien")}>
                {getReadableSize(this.props.file.size)}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className={"message " + (this.props.isMy ? "my" : "alien")}>
            <a href={URL.createObjectURL(this.props.file)}>
              {this.props.file.name}
            </a>
            <div className="extras">
              <div
                className={
                  "time-and-state--" + (this.props.isMy ? "my" : "alien")
                }
              >
                {this.props.time}
              </div>
              <div className={"size--" + (this.props.isMy ? "my" : "alien")}>
                {getReadableSize(this.props.file.size)}
              </div>
            </div>
          </div>
        );
      }
    } else {
      // this.sendAndUpdate(text, "");
      return (
        <div className={"message " + (this.props.isMy ? "my" : "alien")}>
          <div
            className={"text--" + (this.props.isMy ? "my" : "alien")}
            dangerouslySetInnerHTML={this.handleReaction(this.props.text)}
          />
          <div className="extras">
            <div
              className={
                "time-and-state--" + (this.props.isMy ? "my" : "alien")
              }
            >
              {this.props.time}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Message;
