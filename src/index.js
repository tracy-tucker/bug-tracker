import store from "./store";

store.dispatch({
  type: "ADDBUG",
  payload: {
    description: "Bug1",
  },
});

store.dispatch({
  type: "REMOVEBUG",
  payload: {
    id: 1,
  },
});

// store.dispatch({});

console.log(store.getState());
