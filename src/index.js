import store from "./store";
import { addbug, resolvebug, removebug } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(addbug("Bug 1"));
store.dispatch(resolvebug(1));

unsubscribe();

store.dispatch(removebug(1));
// store.dispatch({
//   type: actions.REMOVEBUG,
//   payload: {
//     id: 1,
//   },
// });
