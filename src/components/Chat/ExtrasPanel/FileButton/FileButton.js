import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import * as actionTypes from "store/actionTypes/actionTypes";

import ImageFileButton from "static/Chat/MessageForm/FileButton/paperclip.svg";

class FileButton extends React.Component {
  onFileSelect = event => {
    event.preventDefault();
    let files = Array.from(event.target.files);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        this.props.handleFileSelect(file);
        this.props.onMessage([null, file]);
      };

      reader.readAsDataURL(file);
    }, this);
  };

  render() {
    return (
      <div className={styles["file-button"]}>
        <label
          className={styles["file-button__label"]}
          htmlFor="file-button__input"
        >
          <img
            className={styles["file-button__image"]}
            src={ImageFileButton}
            alt="File button"
          />
        </label>
        <input
          className={styles["file-button__input"]}
          id="file-button__input"
          type="file"
          onChange={this.onFileSelect}
          multiple
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleFileSelect: file =>
    dispatch({
      type: actionTypes.SEND_FILE,
      file
    })
});

export default connect(
  null,
  mapDispatchToProps
)(FileButton);
