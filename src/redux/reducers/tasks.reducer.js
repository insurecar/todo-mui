import { GET_DATE, ADD_TASK, DELETE_TASK } from "../actions/actions";

const initialState = [];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATE:
      return [...state, ...action.payload];
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      console.log("PAYLOAD", action.payload);
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};
