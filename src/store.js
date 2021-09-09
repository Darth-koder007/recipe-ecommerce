import boxConfigReducer from './reducers/boxConfigSlice';
import recipesReducer from './reducers/recipesSlice';

const store = {
  reducer: {
    boxConfig: boxConfigReducer,
    recipes: recipesReducer,
  },
};

export default store;
