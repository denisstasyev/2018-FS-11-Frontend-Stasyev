import React from "react";
import styles from "./styles.module.css";

import { MessageList } from "./MessageList";
import { ExtrasPanel } from "./ExtrasPanel";
import { MessageForm } from "./MessageForm";

import { sendToServer } from "utils";
import workerCode from "./sharedWorker";

class Chat extends React.Component {
  state = {
    worker: this.getSharedWorker()
  };

  render() {
    return (
      <div className={styles["chat"]}>
        <MessageList onMessage={this.onMessage.bind(this)} />
        <ExtrasPanel onMessage={this.onMessage.bind(this)} />
        <MessageForm onMessage={this.onMessage.bind(this)} />
      </div>
    );
  }

  onMessage(message) {
    this.state.worker.then(worker => {
      worker.port.postMessage(message);
    });
  }

  getSharedWorker() {
    const workerFile = new Blob([`(${workerCode})(self)`], {
      type: "text/javascript"
    });
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.addEventListener("loadend", event => {
        const worker = new SharedWorker(event.target.result);
        worker.port.addEventListener(
          "message",
          this.onWorkerMessage.bind(this)
        );
        worker.port.start();
        window.addEventListener("beforeunload", () => {
          worker.port.postMessage("disconnect");
        });
        res(worker);
      });
      reader.addEventListener("error", rej);
      reader.readAsDataURL(workerFile);
    });
  }

  onWorkerMessage(event) {
    console.log(event.data[0]);
    console.log(event.data[1]);
    sendToServer(event.data[0], event.data[1]).then(response => {
      if (response) {
        console.log("Delivered!");
      } else {
        console.log("Not delivered!");
      }
    });
  }
}

export default Chat;
