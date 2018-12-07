import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import ChatList from "../ChatList/ChatList";
import Chat from "../Chat/Chat";

class App extends React.Component {
  render() {
    return (
      <Router className="app">
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={ChatList} />
            <Route path="/chat1" component={Chat} />
            <Route path="/chat2" component={Chat} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
