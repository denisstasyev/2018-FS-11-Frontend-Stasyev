import React from "react";
import "./FileButton.css";

class FileButton extends React.Component {
  onFileSelect(event) {
    event.preventDefault();
    var thisPointer = this;

    var files = event.target.files;

    for (var i = 0; i < files.length; i++) {
      // eslint-disable-next-line no-loop-func
      (function(file) {
        var reader = new FileReader();

        reader.onload = function() {
          if (file.type.startsWith("image/")) {
            thisPointer.props.updateData(
              thisPointer.props.id + 1,
              "",
              reader.result,
              file
            );
          } else {
            thisPointer.props.updateData(
              thisPointer.props.id + 1,
              "",
              "",
              file
            );
          }
        };

        reader.readAsDataURL(file);
      })(files[i]);
    }
  }

  render() {
    return (
      <div className="file-button">
        <label htmlFor="file-button__input">
          <img
            className="file-button__image"
            src={require("../../static/MessageForm/FileButton/sign-add.svg")}
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
