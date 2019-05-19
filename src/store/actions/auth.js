import * as actionTypes from "../actionTypes/actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token
  };
};

export const authFailed = err => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: err
  };
};

export const auth = (login, password) => {
  return dispatch => {
    console.log("auth");
    dispatch(authStart());
    axios
      .post("/auth", { login, password })
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        dispatch(authSuccess(response.data.token));
      })
      .catch(error => {
        dispatch(authFailed(error));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(authSuccess(token));
    }
  };
};
