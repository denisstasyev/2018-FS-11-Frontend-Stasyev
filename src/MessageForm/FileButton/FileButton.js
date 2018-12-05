import React from "react";
import "./FileButton.css";

import { getTime, getReadableSize, sendToServer } from "../../Utils/Utils";

class FileButton extends React.Component {
  onFileSelect(event) {
    event.preventDefault();
    var text = "";
    var this_ptr = this;

    var files = event.target.files;

    for (var i = 0; i < files.length; i++) {
      // eslint-disable-next-line no-loop-func
      (function(file) {
        var reader = new FileReader();
        reader.onload = function() {
          if (file.type.startsWith("image/")) {
            text = reader.result;
            this_ptr.props.updateData("", getTime(), text);
          } else {
            text = `${file.name}, ${getReadableSize(file.size)}`;
            this_ptr.props.updateData(text, getTime(), "");
          }
        };
        reader.readAsDataURL(file);
        sendToServer(file, "");
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
