import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { IconButton, LinearProgress } from '@material-ui/core';

export const Search = styled(TextField)`
  padding: 0 0 10px 0;
  grid-row: 2;
  grid-column: 1 / span 2;
`;

export const Wrapper = styled.div``;

export const SearchWrapper = styled.div`
  padding: 5px;
  height: 74px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    padding: 0px;
    margin: 0px;
    position: relative;
    top: 10px;
    margin-right: 10px;
  }
`;

export const DetailWrapper = styled.div`
  padding: 10px 20px;
  img {
    float: left;
    margin: 0 10px 10px 0;
  }
  h5 {
    margin: 0 0 10px;
  }
`;

export const SearchLinearProgress = styled(LinearProgress)`
  grid-column: 1 / span 2;
`;

export const SearchIconButton = styled(IconButton)`
  grid-row: 2;
`;

export const ResultsGridWrapper = styled.div`
  .ag-root-wrapper.ag-layout-normal {
    height: 500px;
    .ag-header {
      background: whitesmoke;
      color: gray;
    }
  }
`;

export const Error = styled.h2`
  color: red;
  opacity: 0.7;
`;
