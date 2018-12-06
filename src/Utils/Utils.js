export function getReadableSize(size) {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let newSize = size;
  for (const item in units) {
    if (newSize < 1024) {
      return `${Math.ceil(newSize)} ${units[item]}`;
    }
    newSize /= 1024;
  }
  return `${Math.ceil(size)} B`;
}

export function getTime() {
  var date = new Date();
  var timeRegex = "^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])(:[0-5][0-9])?";
  return date.toTimeString().match(timeRegex)[0];
}

export function sendToServer(text, file) {
  var formData = new FormData();
  formData.append("user", "Denis");
  formData.append("date", `${getTime()} ${new Date().toDateString()}`);
  if (file !== "") {
    formData.append("file", file);
  } else {
    formData.append("text", text);
  }

  return fetch("http://127.0.0.1:8082/message", {
    method: "POST",
    body: formData
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

/*
_formMessage(flag, input) {
  const data = new FormData();
  const date = new Date();
  const time = `${date.getHours().toString()}:${date.getMinutes().toString()}`;
  data.append('author', 'me');
  data.append('time', time);
  if (flag === 'attachment') {
    data.append('text', null);
    data.append('files', input);
  }
  if (flag === 'textMessage') {
    data.append('text', input);
    data.append('files', null);
  }
  return data;
}

_sendMessage(text) {
  const dataToServer = this._formMessage('textMessage', text);
  fetch('http://localhost:8081/message', {
    method: 'POST',
    body: dataToServer,
  }).then(result => console.log(result));

  const message = document.createElement('div');
  message.className = 'message from';
  const messageFrom = document.createElement('div');
  messageFrom.innerText = text;
  messageFrom.className = 'text-from';
  message.appendChild(messageFrom);
  this._elements.messageList.appendChild(message);
  // this._elements.attachment.dispatchEvent(new Event('send-message'));
}
*/
