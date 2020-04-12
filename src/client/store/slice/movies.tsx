import { createSlice, createSelector } from '@reduxjs/toolkit';
import SearchMovies from '../thunk/search-movies';
import GetMovie from '../thunk/get-movie';
import FetchPopularMovies from '../thunk/fetch-popular-movies';
import { RootState } from '..';

export const moviesSelector = createSelector(
  (state: RootState) => state.movies.popularMovies,
  (state: RootState) => state.movies.searchResults,
  (state: RootState) => state.movies.hasSearched,
  (popular, search, hasSearched) => (hasSearched ? search : popular)
);

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    error: null,
    loading: false,
    searchResults: [],
    popularMovies: [],
    currentMovie: null,
    hasSearched: false
  },
  extraReducers: (builder) => {
    builder.addCase(FetchPopularMovies.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(FetchPopularMovies.rejected, (state) => {
      return { ...state, loading: false };
    });
    builder.addCase(FetchPopularMovies.fulfilled, (state, action) => {
      const popularMovies = action.payload;
      return { ...state, loading: false, popularMovies };
    });
    builder.addCase(SearchMovies.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(SearchMovies.rejected, (state) => {
      return { ...state, loading: false };
    });
    builder.addCase(SearchMovies.fulfilled, (state, action) => {
      const searchResults = action.payload;
      return { ...state, loading: false, searchResults };
    });
    builder.addCase(GetMovie.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(GetMovie.rejected, (state) => {
      return { ...state, loading: false };
    });
    builder.addCase(GetMovie.fulfilled, (state, action) => {
      const currentMovie = action.payload;
      return { ...state, loading: false, currentMovie };
    });
  },
  reducers: {
    setHasSearched(state) {
      console.log({ setHasSearched: true });
      return { ...state, hasSearched: true };
    }
  }
});
