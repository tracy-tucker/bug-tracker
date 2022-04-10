import store from "./store";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch({
  type: "ADDBUG",
  payload: {
    description: "Bug1",
  },
});

unsubscribe();

store.dispatch({
  type: "REMOVEBUG",
  payload: {
    id: 1,
  },
});
