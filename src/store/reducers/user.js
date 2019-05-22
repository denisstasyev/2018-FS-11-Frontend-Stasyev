import { fromJS } from "immutable";

const initialState = fromJS({
  user: {
    name: "",
    isAuthorized: false
  }
});

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
