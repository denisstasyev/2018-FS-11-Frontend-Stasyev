import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  text: "",
  file: "",
  isExtrasPanelVisible: false
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.SEND_TEXT:
      return {
        text: "",
        file: "",
        isExtrasPanelVisible: false
      };
    case actionTypes.SEND_FILE:
      return {
        text: state.text,
        file: "",
        isExtrasPanelVisible: false
      };
    case actionTypes.UPDATE_TEXT:
      return {
        text: state.text + action.text,
        file: state.file,
        isExtrasPanelVisible: state.isExtrasPanelVisible
      };
    case actionTypes.REWRITE_TEXT:
      return {
        text: action.text,
        file: state.file,
        isExtrasPanelVisible: state.isExtrasPanelVisible
      };
    case actionTypes.TOGGLE_EXTRAS:
      return {
        ...state,
        isExtrasPanelVisible: !state.isExtrasPanelVisible
      };
  }

  return state;
};

export default reducer;
