import { Map } from "immutable";

import * as actionTypes from "../actionTypes/actionTypes";

const initialState = Map({
  text: "",
  file: "",
  isExtrasPanelVisible: false
});

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.SEND_TEXT:
      return Map({
        text: "",
        file: "",
        isExtrasPanelVisible: false
      });
    case actionTypes.SEND_FILE:
      return Map({
        text: state.get("text"),
        file: "",
        isExtrasPanelVisible: false
      });
    case actionTypes.UPDATE_TEXT:
      return Map({
        text: state.get("text") + action.text,
        file: state.get("file"),
        isExtrasPanelVisible: state.get("isExtrasPanelVisible")
      });
    case actionTypes.REWRITE_TEXT:
      return Map({
        text: action.text,
        file: state.get("file"),
        isExtrasPanelVisible: state.get("isExtrasPanelVisible")
      });
    case actionTypes.TOGGLE_EXTRAS:
      return Map({
        text: state.get("text"),
        file: state.get("file"),
        isExtrasPanelVisible: !state.get("isExtrasPanelVisible")
      });
  }

  return state;
};

export default reducer;
