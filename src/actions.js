import * as actions from "./actionTypes";

export const addbug = (description) => ({
  type: actions.ADDBUG,
  payload: {
    description,
  },
});

export const resolvebug = (id) => ({
  type: actions.RESOLVEBUG,
  payload: {
    id,
  },
});

export const removebug = (id) => ({
  type: actions.REMOVEBUG,
  payload: {
    id,
  },
});
