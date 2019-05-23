import { fromJS } from "immutable";

import * as actionTypes from "store/actionTypes/actionTypes";

const initialState = fromJS({
  token: null,
  error: null,
  loading: false
});

const authStart = (state, action) => {
  return state.set("loading", true).set("error", null);
};

const authSuccess = (state, action) => {
  return state
    .set("token", action.token)
    .set("loading", false)
    .set("error", null);
};

const authFail = (state, action) => {
  return state.set("loading", false).set("error", action.error);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAILED:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
