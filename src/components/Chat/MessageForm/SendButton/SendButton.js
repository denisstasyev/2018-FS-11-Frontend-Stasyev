import React from "react";
import { connect } from "react-redux";
import "./SendButton.css";

import * as actionTypes from "../../../../store/actionTypes/actionTypes";

class SendButton extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.props.text);
  }

  render() {
    return (
      <button
        className={
          "send-button " + (this.props.text.length > 0 ? "" : "hidden")
        }
        onClick={this.onSubmit.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.messageFormReducer.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: text =>
      dispatch({
        type: actionTypes.SEND_TEXT,
        text
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendButton);
