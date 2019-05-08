import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import ChatList from "./components/ChatList/ChatList";
import Chat from "./components/Chat/Chat";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={ChatList} />
            <Route path="/chat/:id" component={Chat} />
            {/* <Route path="/register" component={Register} /> */}
            <Route path="/login" component={Auth} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
