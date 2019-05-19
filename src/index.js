import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./index.css";

// import * as serviceWorker from "./unused/serviceWorker";

import App from "./App";
import messageFormReducer from "./store/reducers/messageForm";
import messageListReducer from "./store/reducers/messageList";
import userReducer from "./store/reducers/user";
import chatListReducer from "./store/reducers/chatList";

import authReducer from "./store/reducers/auth";

const rootReducer = combineReducers({
  messageFormReducer,
  messageListReducer,
  userReducer,
  chatListReducer,
  auth: authReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// serviceWorker.unregister();
