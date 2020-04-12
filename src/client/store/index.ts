import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { movieSlice } from './slice/movies';

const rootReducer = combineReducers({
  movies: movieSlice.reducer
});
const store = configureStore({
  reducer: rootReducer
});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
