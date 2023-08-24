import { AnyAction } from "redux";

const INITIAL_STATE = {
  count: 0,
  clicks: 0
}

const reducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload,
      }
    case 'COUNTER_CLICKS':
      return {
        ...state,
        clicks: state.clicks + 1,
      }
    default:
      return state;
  }
}

export default reducer;