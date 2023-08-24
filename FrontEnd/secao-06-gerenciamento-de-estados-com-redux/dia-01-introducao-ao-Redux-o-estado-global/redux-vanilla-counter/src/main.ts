import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

type ActionType = {
  type: string;
}

const INITAL_STATE = {
  count: 0,
}

const reducer = (state = INITAL_STATE, action: ActionType) => {
  if(action.type === "INCREMENT_COUNTER") {
    return {count: state.count + 1};
  }

  return state;
};

const store = createStore(reducer, composeWithDevTools());

const action = {
  type: "INCREMENT_COUNTER",
}

const buttonEl = document.querySelector("button") as HTMLButtonElement;
const counterEl = document.querySelector("h2") as HTMLHeadingElement;
buttonEl.addEventListener("click", () => {
  store.dispatch(action);
})

store.subscribe(() => {
  const globalState = store.getState();
  counterEl.textContent = String(globalState.count);
  // console.log(globalState);
})