import React, { PureComponent, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { SentryErrorLogger } from "components/SentryErrorLogger";
import { Header } from "components/Header";
import Auth from "components/Auth/Auth";
import { ChatList } from "components/ChatList";
import { Chat } from "components/Chat";

import { askForPermissioToReceiveNotifications } from "push-notification";

class App extends PureComponent {
  componentDidMount() {
    askForPermissioToReceiveNotifications();
    console.info(`%c Welcome, developer!`, `font-size: 20px; color: green`);
  }

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

          <SentryErrorLogger />
        </Fragment>
      </Router>
    );
  }
}

export default App;
