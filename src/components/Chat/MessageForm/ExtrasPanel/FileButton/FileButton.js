import React from "react";
import { connect } from "react-redux";
import "./FileButton.css";

import * as actionTypes from "../../../../../store/actionTypes/actionTypes";

import ImageFileButton from "../../../../../static/Chat/MessageForm/FileButton/paperclip.svg";

class FileButton extends React.Component {
  onFileSelect(event) {
    event.preventDefault();
    var files = Array.from(event.target.files);

    files.forEach(function(file) {
      var reader = new FileReader();
      reader.onload = function() {
        this.props.handleFileSelect(file);
      }.bind(this);

      reader.readAsDataURL(file);
    }, this);
  }

  render() {
    return (
      <div className="file-button">
        <label className="file-button__label" htmlFor="file-button__input">
          <img
            className="file-button__image"
            src={ImageFileButton}
            alt="File button"
          />
        </label>
        <input
          className="file-button__input"
          id="file-button__input"
          type="file"
          onChange={this.onFileSelect.bind(this)}
          multiple
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFileSelect: file =>
      dispatch({
        type: actionTypes.SEND_FILE,
        file
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FileButton);
