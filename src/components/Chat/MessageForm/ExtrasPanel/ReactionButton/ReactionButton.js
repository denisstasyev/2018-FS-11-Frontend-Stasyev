import React from "react";
import { connect } from "react-redux";
import "./ReactionButton.css";

import * as actionTypes from "../../../../../store/actionTypes/actionTypes";

class ReactionButton extends React.Component {
  sendReaction() {
    this.props.handleSendText(this.props.text);
  }

  updateText() {
    this.props.handleUpdateText(this.props.text);
  }

  render() {
    return (
      <img
        className="reaction-button"
        onDoubleClick={this.sendReaction.bind(this)}
        onClick={this.updateText.bind(this)}
        src={require("../../../../../static/Chat/MessageForm/Reactions/" +
          this.props.name +
          ".png?sprite=sprite-reactions")}
        alt={"Reaction " + this.props.name}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSendText: text => dispatch({ type: actionTypes.SEND_TEXT, text }),
    handleUpdateText: text => dispatch({ type: actionTypes.UPDATE_TEXT, text })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ReactionButton);
