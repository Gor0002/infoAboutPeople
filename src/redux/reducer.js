import {LOADER, SAVE_USER_LIST, SET_ACTIVE_USER} from './action'

const initialState = {
    loader: false,
    data: [],
    activePerson: null
}



export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SAVE_USER_LIST:
      return {...state, data: payload};
    case LOADER:
        return {...state, loader: !state.loader}
    case SET_ACTIVE_USER:
        return {...state, activePerson: payload }    
    default:
      return state;
  }
};
