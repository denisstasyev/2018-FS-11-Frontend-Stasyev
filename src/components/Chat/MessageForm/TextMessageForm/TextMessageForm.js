import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import * as actionTypes from "store/actionTypes/actionTypes";

class TextMessageForm extends React.Component {
  onChange(event) {
    event.preventDefault();
    this.props.handleRewriteText(event.target.value);
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.props.text.length > 0) {
      this.props.handleSendText(this.props.text);
      this.props.onMessage([this.props.text, null]);
    }
  }

  render() {
    return (
      <form
        className={styles["text-message-form"]}
        onSubmit={this.onSubmit.bind(this)}
      >
        <input
          className={styles["text-message-form__input"]}
          value={this.props.text}
          type="text"
          placeholder="Enter your message"
          onChange={this.onChange.bind(this)}
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  text: state.messageFormReducer.text
});

const mapDispatchToProps = dispatch => ({
  handleRewriteText: text =>
    dispatch({
      type: actionTypes.REWRITE_TEXT,
      text
    }),
  handleSendText: text =>
    dispatch({
      type: actionTypes.SEND_TEXT,
      text
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextMessageForm);
