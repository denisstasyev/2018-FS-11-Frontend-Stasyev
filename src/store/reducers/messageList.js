import * as actionTypes from "../actionTypes/actionTypes";
import { updateObject } from "../utility";
import { getTime } from "utils";

const initialState = {
  i: 0,
  messageList: [
    {
      id: 0,
      text: "Hello!",
      file: "",
      isMy: false,
      time: getTime()
    }
  ]
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.SEND_TEXT:
      return updateObject(state, {
        i: state.i + 1,
        messageList: state.messageList.concat({
          id: state.i,
          text: action.text,
          file: "",
          isMy: true,
          time: getTime()
        })
      });
    case actionTypes.SEND_FILE:
      return updateObject(state, {
        i: state.i + 1,
        messageList: state.messageList.concat({
          id: state.i,
          text: "",
          file: action.file,
          isMy: true,
          time: getTime()
        })
      });
  }

  return state;
};

export default reducer;
