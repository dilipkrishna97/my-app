import Reducer from "./reducer";
import { createStore } from "redux";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    const parsedState = JSON.parse(serialisedState);
    if (parsedState?.selectedDept) parsedState.selectedDept = undefined;
    return parsedState;
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(Reducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
