import { AnyAction } from "redux";

const INITIAL_STATE = {
  count: 0,
}

const reducer = (state = INITIAL_STATE, action: AnyAction) => state;

export default reducer;