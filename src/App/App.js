import React from "react";
import "./App.css";

import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: "",
      image: "",
      file: "",
      isMy: false
    };
  }

  updateData(id, text, image, file) {
    this.setState({
      id,
      text,
      image,
      file,
      isMy: true
    });
  }

  render() {
    return (
      <div className="app">
        {/* <Title /> */}
        <MessageList
          id={this.state.id}
          text={this.state.text}
          image={this.state.image}
          file={this.state.file}
          isMy={this.state.isMy}
          updateData={this.updateData.bind(this)}
        />
        <MessageForm
          id={this.state.id}
          updateData={this.updateData.bind(this)}
        />
      </div>
    );
  }
}

export default App;
