/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./styles.module.css";

import { getReadableSize } from "utils";

import reactionTypeList from "../../reactionTypes";

const imagePattern = /^image\.*/;

class Message extends React.Component {
  sanitize = string => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&grave;",
      "/": "&#x2F;"
    };
    const reg = /[&<>"'`/]/gi;
    return string.replace(reg, match => map[match]);
  };

  preventXSSAttack = text => {
    return this.sanitize(text);
  };

  handleReaction(text) {
    let result = text;
    result = this.preventXSSAttack(result);
    reactionTypeList.forEach(reaction => {
      if (text === reaction.text) {
        result = `<span className="${[
          styles["reaction-preview"],
          styles[reaction.name]
        ].join(" ")}" />`;
      }
      while (result.indexOf(reaction.text) !== -1) {
        result = result.replace(
          reaction.text,
          `<span className="${[
            styles["reaction-inline"],
            styles[reaction.name]
          ].join(" ")}" />`
        );
      }
    });
    return { __html: result };
  }

  render() {
    return (
      <div
        className={
          this.props.isMy ? styles["message--my"] : styles["message--alien"]
        }
      >
        {this.props.file ? (
          this.props.file.type.match(imagePattern) ? (
            <img
              className={styles["image-preview"]}
              src={URL.createObjectURL(this.props.file)}
              alt="Image preview"
            />
          ) : (
            <a href={URL.createObjectURL(this.props.file)}>
              {this.props.file.name}
            </a>
          )
        ) : (
          <div
            className={
              this.props.isMy ? styles["text--my"] : styles["text--alien"]
            }
            dangerouslySetInnerHTML={this.handleReaction(this.props.text)}
          />
        )}

        <div
          className={
            this.props.isMy ? styles["extras--my"] : styles["extras-alien"]
          }
        >
          <div
            className={
              this.props.isMy
                ? styles["send-time--my"]
                : styles["send-time--alien"]
            }
          >
            {this.props.time}
          </div>
          {this.props.file ? (
            <div
              className={
                this.props.isMy ? styles["size--my"] : styles["size--alien"]
              }
            >
              {getReadableSize(this.props.file.size)}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Message;
