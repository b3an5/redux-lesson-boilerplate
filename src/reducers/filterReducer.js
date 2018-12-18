export const filterReducer = (state = 'ALL TODOS', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;
    default: 
      return state;
  }
}