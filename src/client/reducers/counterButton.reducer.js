const INCREMENT = 'INCREMENT';

const initialState = {
  count: 0,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      const { count } = state;
      return {
        count: count + 1,
      };
    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT,
  };
}
