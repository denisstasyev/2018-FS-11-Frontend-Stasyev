import React from "react";
import "./TextMessageForm.css";

class TextMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange(event) {
    event.preventDefault();
    this.props.updateDataMessageForm(event.target.value);
    this.setState({ value: event.target.value });
  }

  cleanValue() {
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="text-message-form">
        <input
          className="text-message-form__input"
          value={this.state.value}
          type="text"
          placeholder="Введите сообщение"
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default TextMessageForm;