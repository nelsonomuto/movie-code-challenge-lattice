import React from 'react';
import styled from 'styled-components';
import { ResultsGridWrapper, Error } from '../elements';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Movie } from '../constants/types';
import { Link } from 'react-router-dom';

interface LoadingBarProps {
  loading: boolean;
}

const LoadingBar = styled(LinearProgress)`
  visibility: ${(props: LoadingBarProps) => (props.loading ? 'visible' : 'hidden')};
`;

interface Props {
  error: null | string;
  loading: boolean;
  results: Movie[];
}
const MovieResults: React.FC<Props> = ({ loading, error, results }) => {
  return (
    <ResultsGridWrapper className='ag-theme-balham'>
      {error && <Error>error</Error>}
      <LoadingBar loading={loading} />
      {results && (
        <TableContainer component={Paper}>
          <Table aria-label='movies'>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Vote Avg</TableCell>
                <TableCell>Vote Count</TableCell>
                <TableCell>Overview</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((r: Movie) => (
                <TableRow key={r.id}>
                  <TableCell>
                    <Link to={`/movie/${r.id}`}>{r.title}</Link>
                  </TableCell>
                  <TableCell>{r.vote_average}</TableCell>
                  <TableCell>{r.vote_count}</TableCell>
                  <TableCell>{r.overview}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </ResultsGridWrapper>
  );
};

export default MovieResults;
