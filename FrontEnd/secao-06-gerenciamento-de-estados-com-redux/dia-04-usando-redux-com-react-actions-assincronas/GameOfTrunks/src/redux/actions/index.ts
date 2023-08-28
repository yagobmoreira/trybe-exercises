import { Dispatch, StateType } from "../../types";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => {
  return {
    type: REQUEST_STARTED,
  }
}

const requestSuccessful = (data: StateType) => {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: data,
  }
}

const requestFailed = (error: string) => {
  return {
    type: REQUEST_FAILED,
    payload: error,
  }
}

export const fetchCharacter = (character: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch(`https://www.anapioficeandfire.com/api/characters?name=${character}`);
      const data = await response.json();
      console.log(data[0])
      dispatch(requestSuccessful(data[0]));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  }
}