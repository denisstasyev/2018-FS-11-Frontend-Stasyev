import { Map, List } from "immutable";

import * as actionTypes from "../actionTypes/actionTypes";
// import { updateObject } from "../utility";
import { getTime } from "utils";

const initialState = Map({
  i: 0,
  messageList: List([
    {
      id: 0,
      text: "Hello!",
      file: "",
      isMy: false,
      time: getTime()
    }
  ])
});

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.SEND_TEXT:
      // updateObject(
      //   state,
      //   Map({
      //     i: state.get("i") + 1,
      //     messageList: state.get("messageList").push({
      //       id: state.get("i"),
      //       text: action.text,
      //       file: "",
      //       isMy: true,
      //       time: getTime()
      //     })
      //   })
      // );
      return Map({
        i: state.get("i") + 1,
        messageList: state.get("messageList").push({
          id: state.get("i"),
          text: action.text,
          file: "",
          isMy: true,
          time: getTime()
        })
      });

    case actionTypes.SEND_FILE:
      // updateObject(
      //   state,
      //   Map({
      //     i: state.get("i") + 1,
      //     messageList: state.get("messageList").push({
      //       id: state.get("i"),
      //       text: "",
      //       file: action.file,
      //       isMy: true,
      //       time: getTime()
      //     })
      //   })
      // );
      return Map({
        i: state.get("i") + 1,
        messageList: state.get("messageList").push({
          id: state.get("i"),
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
