import { StateType } from "../../types";
import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  character: {
    name: '',
    gender: '',
    culture: '',
    born: '',
    died: '',
    titles: [''],
    aliases: [''],
    allegiances: [''],
  },
  error: ''
}

type ActionType = {
  type: string,
  payload: StateType | StateType[],
}

const rootReducer = (state: StateType = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case REQUEST_STARTED: 
      return {
        ...state,
        isFetching: true,
      }
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        character: action.payload,
        isFetching: false,
      }
    case REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    default:
      return state;
  }
};

export default rootReducer;
