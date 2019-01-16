export function loading(state = true, action) {
  switch (action.type) {
    case 'LOADING':
      return action.loading;
    default:
      return state;
  }
};

export function data(state = [], action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.data;
    default:
      return state;
  }
};
