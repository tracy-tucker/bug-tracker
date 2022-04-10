import store from "./store";
import * as actions from "./actionTypes";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch({
  type: actions.ADDBUG,
  payload: {
    description: "Bug1",
  },
});

unsubscribe();

store.dispatch({
  type: actions.REMOVEBUG,
  payload: {
    id: 1,
  },
});
