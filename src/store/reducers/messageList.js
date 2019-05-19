import * as actionTypes from "../actionTypes/actionTypes";
import { updateObject } from "../utility";
import { getTime } from "../../utils/utils";

const initialState = {
  i: 0,
  messageList: [
    {
      id: 0,
      text: "Hello!",
      file: "",
      isMy: false,
      time: getTime()
      // delivered: false
    }
  ]
};

/*
const updateDeliver = (state, action) => {
  const updatedMessageList =
    state.messageList; //.filter(result => result.id !== action.resultElId)
  return updateObject(state, { messageList: updatedMessageList });
};
*/

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
          // delivered: false
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
          // delivered: false
        })
      });

    /*
    case actionTypes.UPDATE_DELIVERY_STATUS:
      return updateDeliver(state, action);
    */
  }

  return state;
};

export default reducer;
