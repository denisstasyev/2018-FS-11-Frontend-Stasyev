import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import * as actionTypes from "store/actionTypes/actionTypes";

class ReactionButton extends React.Component {
  sendReaction() {
    this.props.handleSendText(this.props.text);
    this.props.onMessage([this.props.text, null]);
  }

  updateText() {
    this.props.handleUpdateText(this.props.text);
  }

  render() {
    return (
      <span
        className={styles[this.props.name]}
        onClick={this.updateText.bind(this)}
        onDoubleClick={this.sendReaction.bind(this)}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSendText: text => dispatch({ type: actionTypes.SEND_TEXT, text }),
  handleUpdateText: text => dispatch({ type: actionTypes.UPDATE_TEXT, text })
});

export default connect(
  null,
  mapDispatchToProps
)(ReactionButton);
