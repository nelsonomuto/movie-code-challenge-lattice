import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, SearchWrapper, SearchLinearProgress } from '../elements';
import SearchMovies from '../store/thunk/search-movies';
import FetchPopularMovies from '../store/thunk/fetch-popular-movies';
import { moviesSelector, movieSlice } from '../store/slice/movies';
import { RootState } from '../store';
import MovieResults from '../components/movie-results';
import MovieSearch from '../components/movie-search';
import CurrentMovie from './current-movie';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const results = useSelector(moviesSelector);
  const error = useSelector((state: RootState) => state.movies.error);
  const loading = useSelector((state: RootState) => state.movies.loading);

  const [searchTerm, setSearchTerm] = useState('');
  const searchPromiseRef = useRef<any>();

  const cancelCurrentSearch = (): void => {
    if (searchPromiseRef.current) {
      searchPromiseRef.current.abort();
      return;
    }
  };
  const search = (): void => {
    dispatch(movieSlice.actions.setHasSearched());
    cancelCurrentSearch();
    if (searchTerm.length > 0) {
      searchPromiseRef.current = dispatch(SearchMovies(searchTerm));
    }
  };
  const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let {
      target: { value }
    } = event;
    value = value && value.trim();
    console.log({ onChange: value });
    setSearchTerm(value);
    search();
  };

  const onSearchTermKeyDown = ({ keyCode }: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyCode === 13) {
      search();
    }
  };
  const onSearchClick = (evt: React.MouseEvent) => {
    search();
  };

  useEffect(() => {
    dispatch(FetchPopularMovies());
  }, [dispatch]);

  return (
    <Router>
      <Wrapper>
        {loading && <SearchLinearProgress />}
        <Route
          path='/'
          exact
          render={() => (
            <React.Fragment>
              <MovieSearch
                onSearchClick={onSearchClick}
                onSearchTermChange={onSearchTermChange}
                onSearchTermKeyDown={onSearchTermKeyDown}
              />
              <MovieResults loading={loading} results={results} error={error} />
            </React.Fragment>
          )}
        />
        <Route
          path='/movie/:id'
          render={() => (
            <React.Fragment>
              <SearchWrapper>
                <Link to='/'>Go back to search results</Link>
              </SearchWrapper>
              <CurrentMovie />
            </React.Fragment>
          )}
        />
      </Wrapper>
    </Router>
  );
};

export default App;
