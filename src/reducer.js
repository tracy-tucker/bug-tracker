function reducer(state, action) {
  let lastId = 0;

  switch (action.type) {
    case "ADDBUG":
      return [
        ...state,
        {
          id: lastId++,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "REMOVEBUG":
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      state;
  }
}
