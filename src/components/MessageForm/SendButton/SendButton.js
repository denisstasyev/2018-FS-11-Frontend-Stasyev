import React from "react";
import "./SendButton.css";

import ImageSignUp from "../../../static/MessageForm/SendButton/sign-up.svg";

class SendButton extends React.Component {
  sendMyLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser!");
      return;
    }

    function success(position) {
      var text = `My location: (${position.coords.latitude}, ${
        position.coords.longitude
      })`;
      this.props.updateData(this.props.id + 1, text, "", "");
    }
    function error() {
      alert("Unable to retrieve your location!");
    }

    navigator.geolocation.getCurrentPosition(success.bind(this), error);
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.props.text !== "") {
      if (this.props.text === "sendMyLocation();") {
        this.sendMyLocation();
      } else {
        this.props.updateData(this.props.id + 1, this.props.text, "", "");
      }
      this.props.updateDataMessageForm("");
      this.props.textMessageForm.cleanValue();
    }
  }

  render() {
    return (
      <div className="send-button">
        <label htmlFor="send-button__input">
          <img
            className="send-button__image"
            src={ImageSignUp}
            alt="Send button"
          />
        </label>
        <input
          className="send-button__input"
          id="send-button__input"
          type="button"
          onClick={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default SendButton;
