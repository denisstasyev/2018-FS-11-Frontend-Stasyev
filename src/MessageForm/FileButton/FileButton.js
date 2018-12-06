import React from "react";
import "./FileButton.css";

class FileButton extends React.Component {
  onFileSelect(event) {
    event.preventDefault();

    var files = event.target.files;

    for (var i = 0; i < files.length; i++) {
      // eslint-disable-next-line no-loop-func
      (function(file) {
        var reader = new FileReader();
        reader.onload = function() {
          if (file.type.startsWith("image/")) {
            this.props.updateData(this.props.id + 1, "", reader.result, file);
          } else {
            this.props.updateData(this.props.id + 1, "", "", file);
          }
        }.bind(this);

        reader.readAsDataURL(file);
      }.bind(this)(files[i]));
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
