/*import * as actionTypes from '../actionTypes/actionTypes';
import { updateObject } from '../utility';*/

const initialState = {
  user: {
    name: "",
    isAuthorized: false
  }
};

const reducer = (state = initialState, action) => {
  /*switch (action.type) {
        case actionTypes.SEND_TEXT:
            return updateObject(state, {user: state.concat(
                                {name: state.name, isAuthorized: state.isAuthorized})});
    }*/
  return state;
};

export default reducer;
