import React from "react";
import "./App.css";

import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      time: "",
      image: "",
      isMy: false
    };
  }

  updateData(text, time, image) {
    this.setState({
      text: text,
      time: time,
      image: image,
      isMy: true
    });
  }

  render() {
    return (
      <div className="app">
        {/* <Title /> */}
        <MessageList
          text={this.state.text}
          time={this.state.time}
          image={this.state.image}
          isMy={this.state.isMy}
          updateData={this.updateData.bind(this)}
        />
        <MessageForm updateData={this.updateData.bind(this)} />
      </div>
    );
  }
}

export default App;
