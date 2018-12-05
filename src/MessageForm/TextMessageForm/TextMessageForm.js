import React from "react";
import "./TextMessageForm.css";

class TextMessageForm extends React.Component {
  onInput(event) {
    event.preventDefault();
    this.props.updateDataMessageForm(event.target.value);
  }

  cleanValue() {
    this.refs.textMessageForm.value = "";
  }

  render() {
    return (
      <div className="text-message-form">
        <input
          className="text-message-form__input"
          ref="textMessageForm"
          type="text"
          placeholder="Введите сообщение"
          onInput={this.onInput.bind(this)}
        />
      </div>
    );
  }
}

export default TextMessageForm;
