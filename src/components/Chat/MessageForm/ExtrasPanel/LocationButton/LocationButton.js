import React from "react";
import { connect } from "react-redux";
import "./LocationButton.css";

import * as actionTypes from "../../../../../store/actionTypes/actionTypes";

class LocationButton extends React.Component {
  sendMyLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser!");
      return;
    }

    function success(position) {
      var text = `My location: (${position.coords.latitude}, ${
        position.coords.longitude
      })`;
      this.props.handleTextSelect(text);
    }
    function error() {
      alert("Unable to retrieve your location!");
    }

    navigator.geolocation.getCurrentPosition(success.bind(this), error);
  }

  render() {
    return (
      <button
        className="location-button"
        onClick={this.sendMyLocation.bind(this)}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTextSelect: text => dispatch({ type: actionTypes.SEND_TEXT, text })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LocationButton);
