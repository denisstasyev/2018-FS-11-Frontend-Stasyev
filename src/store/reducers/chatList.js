import { fromJS } from "immutable";

const initialState = fromJS({
  chatList: []
});

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
