import { Dispatch } from "../../types";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => {
  return { type: REQUEST_STARTED };
}

const requestSuccessful = (imageURL: string) =>  {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

const requestFailed = (error: string) => {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export const fetchDogImage = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      dispatch(requestSuccessful(data.message));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any)  {
      dispatch(requestFailed(error.message));
    }
  };
}