import React from "react";
import "./FileButton.css";

import ImageSignAdd from "../../../static/MessageForm/FileButton/sign-add.svg";

class FileButton extends React.Component {
  onFileSelect(event) {
    event.preventDefault();
    var files = Array.from(event.target.files);

    files.forEach(function(file) {
      var reader = new FileReader();
      reader.onload = function() {
        if (file.type.startsWith("image/")) {
          this.props.updateData(this.props.id + 1, "", reader.result, file);
        } else {
          this.props.updateData(this.props.id + 1, "", "", file);
        }
      }.bind(this);

      reader.readAsDataURL(file);
    }, this);
  }

  render() {
    return (
      <div className="file-button">
        <label htmlFor="file-button__input">
          <img
            className="file-button__image"
            src={ImageSignAdd}
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

export default FileButton;
