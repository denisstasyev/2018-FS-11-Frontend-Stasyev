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
  let date = new Date();
  let timeRegex = "^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])(:[0-5][0-9])?";
  return date.toTimeString().match(timeRegex)[0];
}

export function sendToServer(text, file) {
  let formData = new FormData();
  formData.append("user", "Denis");
  formData.append("date", `${getTime()} ${new Date().toDateString()}`);
  if (file !== null) {
    formData.append("file", file);
  }
  if (text !== null) {
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
