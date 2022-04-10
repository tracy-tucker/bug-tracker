import * as actions from "./actionTypes";
// imported actions will be an object with the action types as properties.

export default function reducer(state = [], action) {
  let lastId = 0;

  switch (action.type) {
    case actions.ADDBUG:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.REMOVEBUG:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.RESOLVEBUG:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}
