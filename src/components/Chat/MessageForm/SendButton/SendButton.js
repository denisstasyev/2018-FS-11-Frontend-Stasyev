import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import * as actionTypes from "store/actionTypes/actionTypes";

class SendButton extends React.Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.props.text);
    this.props.onMessage([this.props.text, null]);
  };

  render() {
    return (
      <button
        className={
          this.props.text.length > 0 ? styles["send-button"] : styles["hidden"]
        }
        onClick={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  text: state.messageFormReducer.text
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: text =>
    dispatch({
      type: actionTypes.SEND_TEXT,
      text
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendButton);
