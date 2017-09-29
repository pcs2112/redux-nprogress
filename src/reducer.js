import { INCREMENT, END } from './actions';

const initialState = {
  increment: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        increment: state.increment + 1
      };

    case END:
      return {
        increment: 0
      };
    default:
      return state;
  }
};
