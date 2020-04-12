import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieDetail from '../components/movie-detail';
import GetMovie from '../store/thunk/get-movie';
import { RootState } from '../store';
import { useParams } from 'react-router-dom';

const CurrentMovie: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentMovie = useSelector((state: RootState) => state.movies.currentMovie);
  const error = useSelector((state: RootState) => state.movies.error);

  useEffect(() => {
    if (id) {
      dispatch(GetMovie(id));
    }
  }, [id, dispatch]);

  return <MovieDetail movie={currentMovie} error={error} />;
};

export default CurrentMovie;
