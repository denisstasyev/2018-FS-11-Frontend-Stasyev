import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "components/Header";
import Auth from "components/Auth/Auth";
import { ChatList } from "components/ChatList";
import { Chat } from "components/Chat";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={ChatList} />
            <Route path="/chat/:id" component={Chat} />
            <Route path="/login" component={Auth} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
