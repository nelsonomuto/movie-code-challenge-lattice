import React from 'react';
import { DetailWrapper, Error } from '../elements';
import { Movie } from '../constants/types';

interface Props {
  error: null | string;
  movie: Movie | null;
}
const MovieDetail: React.FC<Props> = ({ movie, error }) => {
  return (
    <DetailWrapper className='ag-theme-balham'>
      {error && <Error>error</Error>}
      {movie && (
        <React.Fragment>
          <a href={movie.homepage}>
            <h4>{movie.title}</h4>
          </a>
          <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h5>Original title</h5>
          <p>{movie.original_title}</p>
          <h5>Overview</h5>
          <p>{movie.overview}</p>
        </React.Fragment>
      )}
    </DetailWrapper>
  );
};

export default MovieDetail;
