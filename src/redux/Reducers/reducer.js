import { SAVE_DATA } from '../Action/ActionCreator';
import _ from 'underscore';

const initialState = {
  data: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_DATA: 
      return { ...state, data: _.extend(state.data, action.payload)};
    default: 
      return state;
  }
}

export default reducer;