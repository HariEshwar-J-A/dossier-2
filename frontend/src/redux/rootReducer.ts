import { combineReducers } from 'redux';

// Example reducer (you can add your own reducers)
const exampleReducer = (state = {}, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
